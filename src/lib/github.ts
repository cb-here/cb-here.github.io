export type ContributionDay = {
  date: string
  level: number
  count: number
  label: string
}

export type GithubContributions = {
  total: string
  rows: (ContributionDay | null)[][]
}

const DAY_PATTERN = /data-date="([^"]+)" id="(contribution-day-component-(\d+)-(\d+))" data-level="(\d)"/g
const TOOLTIP_PATTERN = /for="(contribution-day-component-\d+-\d+)"[^>]*>([^<]*)<\/tool-tip>/g
const TOTAL_PATTERN = /([\d,]+)\s+contributions\s+in the last year/

export async function getGithubContributions(username: string): Promise<GithubContributions | null> {
  try {
    const response = await fetch(`https://github.com/users/${username}/contributions`, {
      next: { revalidate: 60 * 60 * 24 }
    })

    if (!response.ok) return null

    const html = await response.text()
    const labels = new Map(Array.from(html.matchAll(TOOLTIP_PATTERN), ([, id, label]) => [id, label.trim()]))
    const days = Array.from(html.matchAll(DAY_PATTERN))

    if (!days.length) return null

    const weekCount = Math.max(...days.map(day => Number(day[4]))) + 1
    const rows: (ContributionDay | null)[][] = Array.from({ length: 7 }, () => Array(weekCount).fill(null))

    for (const [, date, id, row, column, level] of days) {
      const label = labels.get(id) ?? ''
      const count = Number(label.match(/^(\d+) contribution/)?.[1] ?? 0)

      rows[Number(row)][Number(column)] = { date, level: Number(level), count, label }
    }

    return { total: html.match(TOTAL_PATTERN)?.[1] ?? '', rows }
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)

    return null
  }
}

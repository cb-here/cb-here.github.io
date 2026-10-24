'use client'

import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import type { ContactFormValues } from './contact-form-schema'
import { contactFormSchema, SERVICE_OPTIONS } from './contact-form-schema'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from '@/components/ui/select'

import { cn } from '@/lib/utils'

type ContactFormProps = {
  className?: string
}

const ContactForm = ({ className }: ContactFormProps) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: ''
    }
  })

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await emailjs.send('service_spoxrlu', 'template_ojb0qir', values, 'JDXZ7z-6V3BOkne6x')
      toast.success("Message sent — I'll get back to you as soon as possible.")
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message. Please try again or email me directly.')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-5', className)}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>Name*</FormLabel>
              <FormControl>
                <Input
                  placeholder='John doe'
                  className='border-border h-11 rounded-[12px] bg-(--background-darker)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>Email*</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='your@email.com'
                  className='border-border h-11 rounded-[12px] bg-(--background-darker)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='service'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>Service*</FormLabel>
              <Select value={field.value || undefined} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='border-border h-11! w-full rounded-[12px] bg-(--background-darker)'>
                    <SelectValue placeholder='Select a service' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {SERVICE_OPTIONS.map(service => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='gap-1'>
              <FormLabel className='text-muted-foreground text-base'>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Enter your message'
                  className='border-border min-h-25 rounded-[12px] bg-(--background-darker)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          variant='outline'
          disabled={form.formState.isSubmitting}
          className='hover:bg-card hover:text-accent bg-card h-10 w-full rounded-[12px]'
        >
          {form.formState.isSubmitting ? 'Sending...' : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm

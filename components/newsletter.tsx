import { type FC } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address")
})

const Newsletter: FC = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(formSchema)
  })

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Join the AI Innovation Newsletter</h3>
        <p className="mb-6">Get weekly insights on AI, PR, and business growth</p>
        <form className="max-w-md mx-auto flex gap-2">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            {...register('email')} 
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter 
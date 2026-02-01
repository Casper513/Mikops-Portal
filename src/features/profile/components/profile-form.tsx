'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Satnaing Dev',
    email: 'satnaingdev@gmail.com',
    phone: '+62 812 3456 7890',
    bio: 'Full stack developer and tech enthusiast',
    location: 'Jakarta, Indonesia',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Profile updated successfully')
    } catch (error) {
      toast.error('Failed to update profile')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='name'>Full Name</Label>
          <Input
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your full name'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email Address</Label>
          <Input
            id='email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            disabled
          />
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='phone'>Phone Number</Label>
          <Input
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Enter your phone number'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='location'>Location</Label>
          <Input
            id='location'
            name='location'
            value={formData.location}
            onChange={handleChange}
            placeholder='Enter your location'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='bio'>Bio</Label>
        <Textarea
          id='bio'
          name='bio'
          value={formData.bio}
          onChange={handleChange}
          placeholder='Tell us about yourself'
          className='min-h-24 resize-none'
        />
      </div>

      <Button type='submit' disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save Profile'}
      </Button>
    </form>
  )
}

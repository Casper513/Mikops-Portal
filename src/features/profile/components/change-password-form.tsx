'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '@/components/password-input'
import { toast } from 'sonner'

export function ChangePasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.currentPassword) {
      toast.error('Please enter your current password')
      return false
    }
    if (!formData.newPassword) {
      toast.error('Please enter a new password')
      return false
    }
    if (formData.newPassword.length < 8) {
      toast.error('Password must be at least 8 characters long')
      return false
    }
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return false
    }
    if (formData.currentPassword === formData.newPassword) {
      toast.error('New password must be different from current password')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      toast.success('Password changed successfully')
      
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      })
    } catch (error) {
      toast.error('Failed to change password')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='rounded-lg border border-dashed p-4'>
        <p className='text-sm text-muted-foreground'>
          For your security, use a password at least 8 characters long that
          contains a mix of uppercase and lowercase letters, numbers, and
          symbols.
        </p>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='currentPassword'>Current Password</Label>
        <PasswordInput
          id='currentPassword'
          name='currentPassword'
          value={formData.currentPassword}
          onChange={handleChange}
          placeholder='Enter your current password'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='newPassword'>New Password</Label>
        <PasswordInput
          id='newPassword'
          name='newPassword'
          value={formData.newPassword}
          onChange={handleChange}
          placeholder='Enter your new password'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='confirmPassword'>Confirm Password</Label>
        <PasswordInput
          id='confirmPassword'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm your new password'
        />
      </div>

      <Button type='submit' disabled={isLoading}>
        {isLoading ? 'Updating Password...' : 'Change Password'}
      </Button>
    </form>
  )
}

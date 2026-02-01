import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ConfigDrawer } from '@/components/config-drawer'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

export function RegistrationStatusPage() {
  const registrationStatus = {
    status: 'active', // active, pending, suspended
    registeredDate: 'January 10, 2026',
    email: 'customer@example.com',
    verified: true,
    phone: '+62 812 3456 7890',
    location: 'Jakarta, Indonesia',
    services: [
      { name: 'Internet Service', status: 'active' },
      { name: 'VPN Access', status: 'active' },
      { name: 'CDN', status: 'pending' },
    ],
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'suspended':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle2 className='h-5 w-5' />
      case 'pending':
        return <Clock className='h-5 w-5' />
      case 'suspended':
        return <AlertCircle className='h-5 w-5' />
      default:
        return null
    }
  }

  return (
    <>
      <Header>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='space-y-0.5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Registration Status
          </h1>
          <p className='text-muted-foreground'>
            Check your registration details and service status
          </p>
        </div>

        <div className='mt-8 space-y-6'>
          {/* Registration Status Overview */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-4'>
              <div>
                <CardTitle>Account Status</CardTitle>
                <CardDescription>Your current registration status</CardDescription>
              </div>
              <div className={`flex items-center gap-2 rounded-full px-4 py-2 ${getStatusColor(registrationStatus.status)}`}>
                {getStatusIcon(registrationStatus.status)}
                <span className='text-sm font-semibold capitalize'>
                  {registrationStatus.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='space-y-2'>
                  <p className='text-sm font-medium text-muted-foreground'>
                    Registration Date
                  </p>
                  <p className='text-lg font-semibold'>
                    {registrationStatus.registeredDate}
                  </p>
                </div>
                <div className='space-y-2'>
                  <p className='text-sm font-medium text-muted-foreground'>
                    Email Verification
                  </p>
                  <div className='flex items-center gap-2'>
                    <CheckCircle2 className='h-5 w-5 text-green-500' />
                    <span className='text-lg font-semibold'>Verified</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Your registered contact details</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <Mail className='h-5 w-5 text-muted-foreground' />
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-muted-foreground'>
                      Email Address
                    </p>
                    <p className='text-sm'>{registrationStatus.email}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='h-5 w-5 text-muted-foreground' />
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-muted-foreground'>
                      Phone Number
                    </p>
                    <p className='text-sm'>{registrationStatus.phone}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <MapPin className='h-5 w-5 text-muted-foreground' />
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-muted-foreground'>
                      Location
                    </p>
                    <p className='text-sm'>{registrationStatus.location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Status */}
          <Card>
            <CardHeader>
              <CardTitle>Registered Services</CardTitle>
              <CardDescription>Status of your active services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-3'>
                {registrationStatus.services.map((service, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between rounded-lg border p-4'
                  >
                    <p className='font-medium'>{service.name}</p>
                    <Badge
                      className={`capitalize ${
                        service.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {service.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Account Actions</CardTitle>
              <CardDescription>Manage your registration</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-3'>
              <Button variant='outline'>Update Information</Button>
              <Button variant='outline'>Verify Email</Button>
              <Button variant='outline'>Contact Support</Button>
            </CardContent>
          </Card>
        </div>
      </Main>
    </>
  )
}

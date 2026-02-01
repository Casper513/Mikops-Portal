import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ConfigDrawer } from '@/components/config-drawer'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { BillingHistory } from './components/billing-history'
import { BillingOverview } from './components/billing-overview'

export function BillingPage() {
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
            Billing
          </h1>
          <p className='text-muted-foreground'>
            Manage your billing information and view invoices
          </p>
        </div>

        <div className='mt-8 space-y-6'>
          {/* Billing Overview */}
          <BillingOverview />

          {/* Current Plan Card */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <div>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>
                  You are currently on the Professional plan
                </CardDescription>
              </div>
              <Button>Manage Plan</Button>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-medium'>Plan Type</span>
                  <span className='text-sm text-muted-foreground'>
                    Professional
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-medium'>Monthly Price</span>
                  <span className='text-sm text-muted-foreground'>
                    $99.99/month
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-medium'>Billing Cycle</span>
                  <span className='text-sm text-muted-foreground'>
                    Monthly
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-medium'>Next Billing Date</span>
                  <span className='text-sm text-muted-foreground'>
                    March 15, 2026
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-medium'>Auto Renewal</span>
                  <span className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800'>
                    Enabled
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <div>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Add or update your payment method</CardDescription>
              </div>
              <Button variant='outline'>Edit</Button>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center justify-between rounded-lg border border-dashed p-4'>
                <div className='space-y-1'>
                  <p className='text-sm font-medium'>Visa ending in 4242</p>
                  <p className='text-xs text-muted-foreground'>
                    Expires 12/2027
                  </p>
                </div>
                <span className='rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800'>
                  Default
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Billing History */}
          <BillingHistory />
        </div>
      </Main>
    </>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'

export function BillingOverview() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Current Balance</CardTitle>
          <DollarSign className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$0.00</div>
          <p className='mt-1 text-xs text-muted-foreground'>No outstanding balance</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>This Month</CardTitle>
          <TrendingUp className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$99.99</div>
          <p className='mt-1 text-xs text-muted-foreground'>Base subscription fee</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Additional Usage</CardTitle>
          <AlertCircle className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$12.50</div>
          <p className='mt-1 text-xs text-muted-foreground'>Overage charges</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Status</CardTitle>
          <CheckCircle className='h-4 w-4 text-green-500' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>Active</div>
          <p className='mt-1 text-xs text-muted-foreground'>Account in good standing</p>
        </CardContent>
      </Card>
    </div>
  )
}

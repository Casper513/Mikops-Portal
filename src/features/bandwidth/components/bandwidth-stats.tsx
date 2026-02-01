import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

interface BandwidthData {
  rx: number
  tx: number
  totalRx: number
  totalTx: number
}

export function BandwidthStats({ data }: { data: BandwidthData }) {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Current Download Speed
          </CardTitle>
          <ArrowDownIcon className='h-4 w-4 text-blue-500' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{data.rx} MB/s</div>
          <p className='mt-1 text-xs text-muted-foreground'>
            Real-time RX speed
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Current Upload Speed
          </CardTitle>
          <ArrowUpIcon className='h-4 w-4 text-green-500' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{data.tx} MB/s</div>
          <p className='mt-1 text-xs text-muted-foreground'>
            Real-time TX speed
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Avg Download</CardTitle>
          <ArrowDownIcon className='h-4 w-4 text-blue-500' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>
            {Math.floor(Math.random() * 400) + 250} MB/s
          </div>
          <p className='mt-1 text-xs text-muted-foreground'>
            Average this hour
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Avg Upload</CardTitle>
          <ArrowUpIcon className='h-4 w-4 text-green-500' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>
            {Math.floor(Math.random() * 300) + 150} MB/s
          </div>
          <p className='mt-1 text-xs text-muted-foreground'>
            Average this hour
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

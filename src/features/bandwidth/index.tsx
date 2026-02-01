import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ConfigDrawer } from '@/components/config-drawer'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { BandwidthChart } from './components/bandwidth-chart'
import { BandwidthStats } from './components/bandwidth-stats'

export function BandwidthMonitoring() {
  const [realTimeData, setRealTimeData] = useState({
    rx: 0,
    tx: 0,
    totalRx: 0,
    totalTx: 0,
  })

  // Simulate real-time bandwidth updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData((prev) => ({
        rx: Math.floor(Math.random() * 1000) + 100, // MB/s
        tx: Math.floor(Math.random() * 800) + 50, // MB/s
        totalRx: prev.totalRx + Math.floor(Math.random() * 1000) + 100,
        totalTx: prev.totalTx + Math.floor(Math.random() * 800) + 50,
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

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
            Bandwidth Monitoring
          </h1>
          <p className='text-muted-foreground'>
            Monitor your real-time network bandwidth usage (RX/TX)
          </p>
        </div>

        <div className='mt-8 space-y-6'>
          {/* Real-time Stats */}
          <BandwidthStats data={realTimeData} />

          {/* Bandwidth Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Bandwidth Usage</CardTitle>
              <CardDescription>
                Real-time download (RX) and upload (TX) speeds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BandwidthChart />
            </CardContent>
          </Card>

          {/* Usage Details Grid */}
          <div className='grid gap-4 md:grid-cols-2'>
            <Card>
              <CardHeader className='pb-3'>
                <CardTitle className='text-sm font-medium'>
                  Total Downloaded (RX)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>
                  {(realTimeData.totalRx / 1024).toFixed(2)} GB
                </div>
                <p className='mt-2 text-xs text-muted-foreground'>
                  Data received this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-3'>
                <CardTitle className='text-sm font-medium'>
                  Total Uploaded (TX)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>
                  {(realTimeData.totalTx / 1024).toFixed(2)} GB
                </div>
                <p className='mt-2 text-xs text-muted-foreground'>
                  Data sent this month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Main>
    </>
  )
}

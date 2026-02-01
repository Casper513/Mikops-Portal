'use client'

import { useState, useEffect } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface DataPoint {
  time: string
  rx: number
  tx: number
}

export function BandwidthChart() {
  const [data, setData] = useState<DataPoint[]>([
    { time: '00:00', rx: 240, tx: 180 },
    { time: '04:00', rx: 380, tx: 220 },
    { time: '08:00', rx: 520, tx: 350 },
    { time: '12:00', rx: 680, tx: 420 },
    { time: '16:00', rx: 550, tx: 380 },
    { time: '20:00', rx: 720, tx: 500 },
    { time: '24:00', rx: 420, tx: 310 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newPoint: DataPoint = {
          time: new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          rx: Math.floor(Math.random() * 700) + 200,
          tx: Math.floor(Math.random() * 500) + 150,
        }

        // Keep only last 12 data points
        return [...prevData.slice(1), newPoint]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis
          dataKey='time'
          className='text-xs'
          tick={{ fontSize: 12 }}
        />
        <YAxis
          className='text-xs'
          tick={{ fontSize: 12 }}
          label={{ value: 'Speed (MB/s)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
          }}
          formatter={(value: number) => `${value} MB/s`}
        />
        <Legend />
        <Line
          type='monotone'
          dataKey='rx'
          stroke='#3b82f6'
          name='Download (RX)'
          dot={false}
          isAnimationActive={false}
        />
        <Line
          type='monotone'
          dataKey='tx'
          stroke='#10b981'
          name='Upload (TX)'
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

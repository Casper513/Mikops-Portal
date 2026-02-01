import { createFileRoute } from '@tanstack/react-router'
import { BandwidthMonitoring } from '@/features/bandwidth'

export const Route = createFileRoute('/_authenticated/bandwidth/')({
  component: BandwidthMonitoring,
})

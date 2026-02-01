import { createFileRoute } from '@tanstack/react-router'
import { RegistrationStatusPage } from '@/features/registration-status'

export const Route = createFileRoute('/_authenticated/registration-status/')({
  component: RegistrationStatusPage,
})

import { useMemo } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { useIsMobile } from '@/hooks/use-mobile'
import { UserCog, Activity, CreditCard, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  {
    title: 'Profile',
    url: '/profile',
    icon: UserCog,
  },
  {
    title: 'Bandwidth',
    url: '/bandwidth',
    icon: Activity,
  },
  {
    title: 'Billing',
    url: '/billing',
    icon: CreditCard,
  },
  {
    title: 'Registration',
    url: '/registration-status',
    icon: CheckCircle2,
  },
]

export function MobileBottomNav() {
  const isMobile = useIsMobile()
  const location = useLocation()

  const currentPath = useMemo(() => {
    return location.pathname
  }, [location.pathname])

  if (!isMobile) {
    return null
  }

  return (
    <nav className='fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex items-center justify-around'>
        {navItems.map((item) => {
          const isActive = currentPath === item.url
          const Icon = item.icon

          return (
            <Link
              key={item.url}
              to={item.url}
              className={cn(
                'flex flex-col items-center justify-center gap-1 px-2 py-3 text-xs font-medium transition-colors',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className='h-5 w-5' />
              <span className='truncate'>{item.title}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

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
import { Separator } from '@/components/ui/separator'
import { ProfileForm } from './components/profile-form'
import { ChangePasswordForm } from './components/change-password-form'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function ProfilePage() {
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
            Profile
          </h1>
          <p className='text-muted-foreground'>
            Manage your profile information and security settings
          </p>
        </div>

        <div className='mt-8 space-y-6'>
          {/* Profile Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
              <CardDescription>Your account profile information</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center gap-4'>
                <Avatar className='h-16 w-16'>
                  <AvatarImage
                    src='/avatars/shadcn.jpg'
                    alt='Profile'
                  />
                  <AvatarFallback>SN</AvatarFallback>
                </Avatar>
                <div className='space-y-1'>
                  <p className='text-lg font-semibold'>Satnaing Dev</p>
                  <p className='text-sm text-muted-foreground'>
                    satnaingdev@gmail.com
                  </p>
                  <p className='text-xs text-muted-foreground'>
                    Member since January 2026
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Form */}
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>
                Update your profile information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm />
            </CardContent>
          </Card>

          <Separator />

          {/* Change Password */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your password and security settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChangePasswordForm />
            </CardContent>
          </Card>
        </div>
      </Main>
    </>
  )
}

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { fonts } from '@/config/fonts'
import { styles, radii, baseColors, accentColors, styleDescriptions, radiusDescriptions } from '@/config/styles'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { cn } from '@/lib/utils'
import { useFont } from '@/context/font-provider'
import { useTheme } from '@/context/theme-provider'
import { useStyle } from '@/context/style-provider'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const appearanceFormSchema = z.object({
  theme: z.enum(['light', 'dark']),
  font: z.enum(fonts),
  style: z.enum(styles),
  radius: z.enum(radii),
  baseColor: z.enum(baseColors),
  accentColor: z.enum(accentColors),
})

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

export function AppearanceForm() {
  const { font, setFont } = useFont()
  const { theme, setTheme } = useTheme()
  const { style, setStyle, radius, setRadius, baseColor, setBaseColor, accentColor, setAccentColor } = useStyle()

  // This can come from your database or API.
  const defaultValues: Partial<AppearanceFormValues> = {
    theme: theme as 'light' | 'dark',
    font,
    style,
    radius,
    baseColor,
    accentColor,
  }

  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  })

  function onSubmit(data: AppearanceFormValues) {
    if (data.font != font) setFont(data.font)
    if (data.theme != theme) setTheme(data.theme)
    if (data.style != style) setStyle(data.style)
    if (data.radius != radius) setRadius(data.radius)
    if (data.baseColor != baseColor) setBaseColor(data.baseColor)
    if (data.accentColor != accentColor) setAccentColor(data.accentColor)

    showSubmittedData(data)
  }

  const handleStyleChange = (value: string) => {
    setStyle(value as typeof style)
    form.setValue('style', value as typeof style)
  }

  const handleRadiusChange = (value: string) => {
    setRadius(value as typeof radius)
    form.setValue('radius', value as typeof radius)
  }

  const handleBaseColorChange = (value: string) => {
    setBaseColor(value as typeof baseColor)
    form.setValue('baseColor', value as typeof baseColor)
  }

  const handleAccentColorChange = (value: string) => {
    setAccentColor(value as typeof accentColor)
    form.setValue('accentColor', value as typeof accentColor)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='font'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font</FormLabel>
              <div className='relative w-max'>
                <FormControl>
                  <select
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'w-[200px] appearance-none font-normal capitalize',
                      'dark:bg-background dark:hover:bg-background'
                    )}
                    {...field}
                  >
                    {fonts.map((font) => (
                      <option key={font} value={font}>
                        {font}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <ChevronDownIcon className='absolute end-3 top-2.5 h-4 w-4 opacity-50' />
              </div>
              <FormDescription className='font-manrope'>
                Set the font you want to use in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='theme'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Theme</FormLabel>
              <FormDescription>
                Select the theme for the dashboard.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className='grid max-w-md grid-cols-2 gap-8 pt-2'
              >
                <FormItem>
                  <FormLabel className='[&:has([data-state=checked])>div]:border-primary'>
                    <FormControl>
                      <RadioGroupItem value='light' className='sr-only' />
                    </FormControl>
                    <div className='items-center rounded-md border-2 border-muted p-1 hover:border-accent'>
                      <div className='space-y-2 rounded-sm bg-[#ecedef] p-2'>
                        <div className='space-y-2 rounded-md bg-white p-2 shadow-xs'>
                          <div className='h-2 w-[80px] rounded-lg bg-[#ecedef]' />
                          <div className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
                        </div>
                        <div className='flex items-center space-x-2 rounded-md bg-white p-2 shadow-xs'>
                          <div className='h-4 w-4 rounded-full bg-[#ecedef]' />
                          <div className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
                        </div>
                        <div className='flex items-center space-x-2 rounded-md bg-white p-2 shadow-xs'>
                          <div className='h-4 w-4 rounded-full bg-[#ecedef]' />
                          <div className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
                        </div>
                      </div>
                    </div>
                    <span className='block w-full p-2 text-center font-normal'>
                      Light
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className='[&:has([data-state=checked])>div]:border-primary'>
                    <FormControl>
                      <RadioGroupItem value='dark' className='sr-only' />
                    </FormControl>
                    <div className='items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground'>
                      <div className='space-y-2 rounded-sm bg-slate-950 p-2'>
                        <div className='space-y-2 rounded-md bg-slate-800 p-2 shadow-xs'>
                          <div className='h-2 w-[80px] rounded-lg bg-slate-400' />
                          <div className='h-2 w-[100px] rounded-lg bg-slate-400' />
                        </div>
                        <div className='flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-xs'>
                          <div className='h-4 w-4 rounded-full bg-slate-400' />
                          <div className='h-2 w-[100px] rounded-lg bg-slate-400' />
                        </div>
                        <div className='flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-xs'>
                          <div className='h-4 w-4 rounded-full bg-slate-400' />
                          <div className='h-2 w-[100px] rounded-lg bg-slate-400' />
                        </div>
                      </div>
                    </div>
                    <span className='block w-full p-2 text-center font-normal'>
                      Dark
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='style'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormDescription>
                Choose the overall visual style and spacing of the dashboard.
              </FormDescription>
              <Select onValueChange={handleStyleChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a style' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {styles.map((styleOption) => (
                    <SelectItem key={styleOption} value={styleOption}>
                      <div className='flex items-center gap-2'>
                        <span className='capitalize'>{styleOption}</span>
                        <span className='text-xs text-muted-foreground'>
                          {styleDescriptions[styleOption]}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='baseColor'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base Color</FormLabel>
              <FormDescription>
                Select the base color scheme for the dashboard.
              </FormDescription>
              <Select onValueChange={handleBaseColorChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a base color' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {baseColors.map((color) => (
                    <SelectItem key={color} value={color}>
                      <div className='flex items-center gap-2'>
                        <div className={cn(
                          'w-3 h-3 rounded-full',
                          color === 'neutral' && 'bg-gray-400',
                          color === 'stone' && 'bg-stone-400',
                          color === 'zinc' && 'bg-zinc-400',
                          color === 'gray' && 'bg-gray-500',
                        )} />
                        <span className='capitalize'>{color}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='accentColor'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Theme Accent</FormLabel>
              <FormDescription>
                Choose an accent color for interactive elements.
              </FormDescription>
              <Select onValueChange={handleAccentColorChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select an accent color' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {accentColors.map((color) => (
                    <SelectItem key={color} value={color}>
                      <div className='flex items-center gap-2'>
                        <div className={cn(
                          'w-3 h-3 rounded-full',
                          color === 'gray' && 'bg-gray-400',
                          color === 'amber' && 'bg-amber-500',
                          color === 'blue' && 'bg-blue-500',
                          color === 'cyan' && 'bg-cyan-500',
                          color === 'emerald' && 'bg-emerald-500',
                          color === 'fuchsia' && 'bg-fuchsia-500',
                          color === 'green' && 'bg-green-500',
                          color === 'indigo' && 'bg-indigo-500',
                          color === 'lime' && 'bg-lime-500',
                          color === 'orange' && 'bg-orange-500',
                          color === 'pink' && 'bg-pink-500',
                          color === 'purple' && 'bg-purple-500',
                          color === 'red' && 'bg-red-500',
                          color === 'rose' && 'bg-rose-500',
                          color === 'sky' && 'bg-sky-500',
                          color === 'teal' && 'bg-teal-500',
                          color === 'violet' && 'bg-violet-500',
                          color === 'yellow' && 'bg-yellow-500',
                        )} />
                        <span className='capitalize'>{color}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='radius'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Border Radius</FormLabel>
              <FormDescription>
                Choose how rounded the corners of UI elements should be.
              </FormDescription>
              <Select onValueChange={handleRadiusChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select border radius' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {radii.map((radiusOption) => (
                    <SelectItem key={radiusOption} value={radiusOption}>
                      <div className='flex items-center gap-2'>
                        <span className='capitalize'>{radiusOption}</span>
                        <span className='text-xs text-muted-foreground'>
                          {radiusDescriptions[radiusOption]}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Update preferences</Button>
      </form>
    </Form>
  )
}

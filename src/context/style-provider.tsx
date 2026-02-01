import { createContext, useContext, useEffect, useState } from 'react'
import { styles, radii, baseColors, accentColors } from '@/config/styles'
import { getCookie, setCookie, removeCookie } from '@/lib/cookies'

type Style = (typeof styles)[number]
type Radius = (typeof radii)[number]
type BaseColor = (typeof baseColors)[number]
type AccentColor = (typeof accentColors)[number]

const STYLE_COOKIE_NAME = 'style'
const RADIUS_COOKIE_NAME = 'radius'
const BASE_COLOR_COOKIE_NAME = 'base-color'
const ACCENT_COLOR_COOKIE_NAME = 'accent-color'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

type StyleContextType = {
  style: Style
  setStyle: (style: Style) => void
  resetStyle: () => void
  radius: Radius
  setRadius: (radius: Radius) => void
  resetRadius: () => void
  baseColor: BaseColor
  setBaseColor: (color: BaseColor) => void
  resetBaseColor: () => void
  accentColor: AccentColor
  setAccentColor: (color: AccentColor) => void
  resetAccentColor: () => void
}

const StyleContext = createContext<StyleContextType | null>(null)

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, _setStyle] = useState<Style>(() => {
    const saved = getCookie(STYLE_COOKIE_NAME)
    return styles.includes(saved as Style) ? (saved as Style) : styles[0]
  })

  const [radius, _setRadius] = useState<Radius>(() => {
    const saved = getCookie(RADIUS_COOKIE_NAME)
    return radii.includes(saved as Radius) ? (saved as Radius) : 'medium'
  })

  const [baseColor, _setBaseColor] = useState<BaseColor>(() => {
    const saved = getCookie(BASE_COLOR_COOKIE_NAME)
    return baseColors.includes(saved as BaseColor) ? (saved as BaseColor) : 'neutral'
  })

  const [accentColor, _setAccentColor] = useState<AccentColor>(() => {
    const saved = getCookie(ACCENT_COLOR_COOKIE_NAME)
    return accentColors.includes(saved as AccentColor)
      ? (saved as AccentColor)
      : 'fuchsia'
  })

  // Apply styles on mount and when they change
  useEffect(() => {
    const root = document.documentElement
    
    // Remove all style-related classes
    const classesToRemove = Array.from(root.classList).filter(
      (cls) => cls.startsWith('style-') || cls.startsWith('radius-') || cls.startsWith('base-') || cls.startsWith('accent-')
    )
    classesToRemove.forEach((cls) => root.classList.remove(cls))

    // Apply new classes
    root.classList.add(`style-${style}`)
    root.classList.add(`radius-${radius}`)
    root.classList.add(`base-${baseColor}`)
    root.classList.add(`accent-${accentColor}`)
  }, [style, radius, baseColor, accentColor])

  const setStyle = (style: Style) => {
    setCookie(STYLE_COOKIE_NAME, style, COOKIE_MAX_AGE)
    _setStyle(style)
  }

  const resetStyle = () => {
    removeCookie(STYLE_COOKIE_NAME)
    _setStyle(styles[0])
  }

  const setRadius = (radius: Radius) => {
    setCookie(RADIUS_COOKIE_NAME, radius, COOKIE_MAX_AGE)
    _setRadius(radius)
  }

  const resetRadius = () => {
    removeCookie(RADIUS_COOKIE_NAME)
    _setRadius('medium')
  }

  const setBaseColor = (color: BaseColor) => {
    setCookie(BASE_COLOR_COOKIE_NAME, color, COOKIE_MAX_AGE)
    _setBaseColor(color)
  }

  const resetBaseColor = () => {
    removeCookie(BASE_COLOR_COOKIE_NAME)
    _setBaseColor('neutral')
  }

  const setAccentColor = (color: AccentColor) => {
    setCookie(ACCENT_COLOR_COOKIE_NAME, color, COOKIE_MAX_AGE)
    _setAccentColor(color)
  }

  const resetAccentColor = () => {
    removeCookie(ACCENT_COLOR_COOKIE_NAME)
    _setAccentColor('fuchsia')
  }

  const contextValue = {
    style,
    setStyle,
    resetStyle,
    radius,
    setRadius,
    resetRadius,
    baseColor,
    setBaseColor,
    resetBaseColor,
    accentColor,
    setAccentColor,
    resetAccentColor,
  }

  return (
    <StyleContext value={contextValue}>{children}</StyleContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStyle = () => {
  const context = useContext(StyleContext)
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider')
  }
  return context
}

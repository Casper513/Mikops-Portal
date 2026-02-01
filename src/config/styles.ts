export const styles = ['vega', 'nova', 'maia', 'lyra', 'mira'] as const

export const styleDescriptions: Record<string, string> = {
  vega: 'The classic shadcn/ui look. Clean, neutral, and familiar.',
  nova: 'Reduced padding and margins for compact layouts.',
  maia: 'Soft and rounded, with generous spacing.',
  lyra: 'Boxy and sharp. Pairs well with mono fonts.',
  mira: 'Compact. Made for dense interfaces.',
}

export const radii = ['default', 'none', 'small', 'medium', 'large'] as const

export const radiusDescriptions: Record<string, string> = {
  default: 'Use radius from style',
  none: 'No border radius',
  small: 'Small border radius',
  medium: 'Medium border radius',
  large: 'Large border radius',
}

export const baseColors = ['neutral', 'stone', 'zinc', 'gray'] as const

export const accentColors = [
  'gray',
  'amber',
  'blue',
  'cyan',
  'emerald',
  'fuchsia',
  'green',
  'indigo',
  'lime',
  'orange',
  'pink',
  'purple',
  'red',
  'rose',
  'sky',
  'teal',
  'violet',
  'yellow',
] as const

export const accentColorDescriptions: Record<string, string> = {
  gray: 'Match base color',
  amber: 'Warm amber accent',
  blue: 'Classic blue accent',
  cyan: 'Cyan accent',
  emerald: 'Green emerald accent',
  fuchsia: 'Pink fuchsia accent',
  green: 'Green accent',
  indigo: 'Deep indigo accent',
  lime: 'Lime green accent',
  orange: 'Orange accent',
  pink: 'Pink accent',
  purple: 'Purple accent',
  red: 'Red accent',
  rose: 'Rose accent',
  sky: 'Sky blue accent',
  teal: 'Teal accent',
  violet: 'Violet accent',
  yellow: 'Yellow accent',
}

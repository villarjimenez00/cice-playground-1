export interface Input {
  label: string
  value: string
  required?: boolean
  type: 'text' | 'password'
  endSlot?: React.ReactNode
  onChange(value: string): void
}

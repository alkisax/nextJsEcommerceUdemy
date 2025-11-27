import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// conver a prisma object into regular js object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

// Format number with decimal places
export function formatNumberWitDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.')
  // '5'.padEnd(2, '0') → '50'
  // '7'.padEnd(3, 'x') → '7xx'
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`
}

/* Utils/index.jsx */

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  // Helper function used by Dialog component
  return twMerge(clsx(inputs))
}

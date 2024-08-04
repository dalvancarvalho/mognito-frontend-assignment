/* Container/index.jsx */

import { twMerge } from 'tailwind-merge'

export function Container({ children, className }) {
  // Container with built-in Tailwind CSS media queries

  return (
    <div
      className={twMerge('container m-auto px-4 md:px-24 lg:px-48 xl:px-80', className)}
    >
      {children}
    </div>
  )
}

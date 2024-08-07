/* Button/index.jsx */

import { twMerge } from 'tailwind-merge'

export function Button({ children, className, onClick }) {
  return (
    <button
      className={twMerge(
        'px-[1.2em] py-[.6em] flex items-center justify-center gap-2 text-sm md:text-base bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

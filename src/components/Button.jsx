/* Button.jsx */

export function Button({ children, className }) {
  return (
    <button
      className={`mt-10 px-8 py-2 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-sm md:text-base text-white rounded-lg transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

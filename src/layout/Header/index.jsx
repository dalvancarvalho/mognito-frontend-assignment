/* Header/index.jsx */

export function Header() {
  return (
    <header className="w-full h-16 border-b">
      <div className="container m-auto px-4 xl:px-24 h-full flex items-center justify-between">
        <span className="font-platypi font-bold text-3xl tracking-tighter">
          <a href="#">the News.</a>
        </span>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a
                className="font-semibold text-sm md:text-base hover:text-slate-600 transition-colors duration-300"
                href="#"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-sm md:text-base hover:text-slate-600 transition-colors duration-300"
                href="#"
              >
                Newsletter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

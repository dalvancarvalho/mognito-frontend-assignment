/* Header/index.jsx */

export function Header() {
  return (
    <header className="w-full h-16 border-b">
      <div className="container m-auto px-4 xl:px-24 h-full flex items-center justify-between">
        <h1 className="display-font text-2xl md:text-3xl">
          <a href="#">the News.</a>
        </h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a className="nav-item" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="nav-item" href="#">
                Newsletter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

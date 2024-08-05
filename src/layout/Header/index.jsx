/* Header/index.jsx */

import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

export function Header({ signOut }) {
  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <header className="w-full h-16 border-b">
      <div className="container m-auto px-4 xl:px-24 h-full flex items-center justify-between">
        <h1 className="display-font text-2xl md:text-3xl">
          <Link to="/">the News.</Link>
        </h1>
        <nav>
          <ul className="flex items-center gap-4 md:gap-6">
            <li>
              <a className="nav-item" href="#">
                Newsletter
              </a>
            </li>
            <li>
              <Button className="px-[1em] py-[.5em]" onClick={handleSignOut}>
                Sign out
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

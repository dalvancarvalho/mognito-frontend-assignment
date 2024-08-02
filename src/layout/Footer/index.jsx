/* Footer/index.jsx */

import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
  return (
    <footer className="w-full h-16 border-t">
      <div className="container m-auto px-4 md:px-24 lg:px-48 h-full flex items-center justify-between">
        <p className="text-xs md:text-sm">
          &copy; 2024{' '}
          <span className="font-platypi font-bold tracking-tighter">the News.</span> All
          Rights Reserved.
        </p>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="text-slate-700 hover:text-slate-600 transition-colors duration-300"
                  size="lg"
                  icon={faFacebook}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="text-slate-700 hover:text-slate-600 transition-colors duration-300"
                  size="lg"
                  icon={faXTwitter}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="text-slate-700"
                  size="lg"
                  icon={faInstagram}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

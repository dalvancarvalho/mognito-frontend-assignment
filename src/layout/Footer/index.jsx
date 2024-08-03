/* Footer/index.jsx */

import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
  return (
    <footer className="w-full min-h-16 border-t">
      <div className="container m-auto px-4 md:px-24 lg:px-48 py-4 md:py-0 h-full flex flex-col-reverse md:flex-row items-center justify-between gap-y-4">
        <p className="text-sm">
          &copy; 2024 <span className="display-font">the News.</span> All Rights Reserved.
        </p>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">
                <FontAwesomeIcon className="social" size="lg" icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="social" size="lg" icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="social" size="lg" icon={faInstagram} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

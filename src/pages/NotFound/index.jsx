/* NotFound/index.jsx */

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'

export function NotFound() {
  // 404 page

  return (
    <section className="h-full grid items-center bg-slate-50">
      <div className="flex flex-col items-center">
        <h2 className="mb-6 md:mb-8 font-platypi text-3xl md:text-4xl self-center">
          Page not found :(
        </h2>
        <Link tabIndex="-1" to="/">
          <Button>
            <FontAwesomeIcon size="xs" icon={faArrowLeft} />
            Back to Home Page
          </Button>
        </Link>
      </div>
    </section>
  )
}

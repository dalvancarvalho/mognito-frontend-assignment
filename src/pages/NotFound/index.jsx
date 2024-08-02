/* NotFound/index.jsx */

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'

export function NotFound() {
  return (
    <div className="h-full grid items-center bg-slate-50">
      <div className="flex flex-col items-center">
        <h1 className="font-platypi text-4xl md:text-5xl self-center">
          Page not found :(
        </h1>
        <Link tabIndex="-1" to="/">
          <Button>
            <FontAwesomeIcon size="xs" icon={faArrowLeft} />
            Back to Home Page
          </Button>
        </Link>
      </div>
    </div>
  )
}

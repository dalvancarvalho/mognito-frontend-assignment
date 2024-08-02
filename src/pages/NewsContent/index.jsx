/* NewsContent/index.jsx */

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'

export function NewsContent({ data }) {
  const { id } = useParams()
  const item = data.news[id]

  return (
    <section className="h-full pt-12 md:pt-20 bg-slate-50">
      <div className="container m-auto px-4 md:px-24 lg:px-48">
        <h2 className="mb-4 md:mb-8 flex gap-4 font-bold text-2xl md:text-3xl font-platypi">
          {item.title}
        </h2>
        <p className="text-sm md:text-base">{item.description}</p>
        <Link className="max-w-max" tabIndex="-1" to="/news">
          <Button>
            <FontAwesomeIcon size="xs" icon={faArrowLeft} />
            Back to news list
          </Button>
        </Link>
      </div>
    </section>
  )
}

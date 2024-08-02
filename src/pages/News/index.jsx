/* News/index.jsx */

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export function News({ data }) {
  // Wraps the pages of the application

  return (
    <section className="h-full pt-12 md:pt-20 bg-slate-50">
      <div className="container m-auto px-4 md:px-24 lg:px-48">
        <h2 className="mb-4 md:mb-8 flex gap-4 font-bold text-2xl md:text-3xl font-platypi">
          Happening now:
        </h2>
        <div>
          {data.news.map((item, index) => (
            <Link
              className="flex items-center gap-3 group/link"
              key={index}
              to={'/news/' + index}
            >
              <FontAwesomeIcon
                className="mb-2 group-hover/link:translate-x-1 transition-transform"
                icon={faArrowRight}
                size="xs"
              />
              <h3 className="mb-2 font-semibold hover:underline">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

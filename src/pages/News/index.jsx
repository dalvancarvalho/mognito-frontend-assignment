/* News/index.jsx */

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { Meta } from '../../components/Meta'

export function News({ news }) {
  // News page (shows a list of news)

  return (
    <>
      <Meta />
      <section className="h-full py-12 md:py-20 bg-slate-50">
        <div className="container m-auto px-4 md:px-24 lg:px-48 xl:px-80">
          <h2 className="mb-6 md:mb-8 display-font text-2xl md:text-3xl">
            Happening now:
          </h2>
          <div>
            {news.map((newsItem, index) => (
              <Link
                className="mb-2 max-w-max flex items-center gap-3 group/link"
                key={index}
                to={'/news/' + index}
              >
                <FontAwesomeIcon
                  className="group-hover/link:translate-x-1 transition-transform"
                  icon={faArrowRight}
                  size="xs"
                />
                <h3 className="font-semibold hover:underline underline-offset-2">
                  {newsItem.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* News/index.jsx */

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { Container } from '../../layout/Container'
import { Meta } from '../../components/Meta'

export function News({ news }) {
  // News page (shows a list of news)

  return (
    <>
      <Meta />
      <section className="h-full py-12 md:py-20 bg-slate-50">
        <Container>
          <h2 className="mb-6 md:mb-8 display-font text-2xl md:text-3xl">
            Happening now:
          </h2>
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
        </Container>
      </section>
    </>
  )
}

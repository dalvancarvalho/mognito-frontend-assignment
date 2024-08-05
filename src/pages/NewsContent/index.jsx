/* NewsContent/index.jsx */

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'

import { Container } from '../../layout/Container'
import { Button } from '../../components/Button'
import { Meta } from '../../components/Meta'

export function NewsContent({ news }) {
  // Displays the news with its title and description

  const { id } = useParams()
  const newsItem = news[id]

  return (
    <>
      <Meta title={newsItem.title} description={newsItem.description} />
      <section className="h-full py-12 md:py-20 bg-slate-50">
        <Container className="flex flex-col items-start">
          <h2 className="mb-6 md:mb-8 display-font text-2xl md:text-3xl">
            {newsItem.title}
          </h2>
          <p className="text-base md:text-lg">{newsItem.description}</p>
          <Link className="mt-20" tabIndex="-1" to="/">
            <Button>
              <FontAwesomeIcon size="xs" icon={faArrowLeft} />
              Back to news list
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}

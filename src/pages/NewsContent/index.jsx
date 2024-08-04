/* NewsContent/index.jsx */

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Meta } from '../../components/Meta'

export function NewsContent({ data }) {
  // Displays the news with its title and description

  const { id } = useParams()
  const item = data.news[id]

  return (
    <>
      <Meta title={item.title} description={item.description} />
      <section className="h-full py-12 md:py-20 bg-slate-50">
        <div className="container m-auto px-4 md:px-24 lg:px-48 xl:px-80 flex flex-col items-start">
          <h2 className="mb-6 md:mb-8 display-font text-2xl md:text-3xl">{item.title}</h2>
          <p className="text-base md:text-lg">{item.description}</p>
          <Link className="mt-20" tabIndex="-1" to="/news">
            <Button>
              <FontAwesomeIcon size="xs" icon={faArrowLeft} />
              Back to news list
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

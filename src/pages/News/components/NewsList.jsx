/* NewsList/index.jsx */

import { Link } from 'react-router-dom'

export function NewsList({ data }) {
  return (
    <div>
      {data.news.map((item, index) => (
        <Link key={index} to={'/news/' + index}>
          <h2>{item.title}</h2>
        </Link>
      ))}
    </div>
  )
}

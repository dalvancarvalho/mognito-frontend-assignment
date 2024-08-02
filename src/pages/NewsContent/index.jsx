/* NewsContent/index.jsx */

import { Link, useParams } from 'react-router-dom'

export function NewsContent({ data }) {
  const { id } = useParams()
  const item = data.news[id]

  return (
    <div>
      <Link to="/news">Back to News List</Link>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  )
}

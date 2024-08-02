/* News/index.jsx */

import { NewsList } from './components/NewsList'

export function News({ data }) {
  // Wraps the pages of the application

  return (
    <div>
      <h1>Latest news:</h1>
      <NewsList data={data} />
    </div>
  )
}

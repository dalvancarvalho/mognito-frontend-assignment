/* Meta/index.jsx */

import { Helmet } from 'react-helmet-async'

export function Meta({
  title = 'the News.',
  description = 'the News. Your daily dose of information, directly on your screen!',
}) {
  // Sets the meta tags of the page

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

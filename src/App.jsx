/* App.jsx */

import { Header } from './layout/Header'
import { Main } from './layout/Main'
import { Footer } from './layout/Footer'

export default function App() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Main>the News.</Main>
      <Footer />
    </div>
  )
}

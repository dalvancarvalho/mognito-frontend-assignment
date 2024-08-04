/* App.jsx */

import { isDevEnvironment, TwBreakpointMonitor } from 'tw-breakpoint-monitor'

import { Header } from './layout/Header'
import { Main } from './layout/Main'
import { Footer } from './layout/Footer'

import { AppRoutes } from './routes'

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
      {isDevEnvironment && <TwBreakpointMonitor position="top-center" />}
    </>
  )
}

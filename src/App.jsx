/* App.jsx */

import { isDevEnvironment, TwBreakpointMonitor } from 'tw-breakpoint-monitor'

import { Header } from './layout/Header'
import { Main } from './layout/Main'
import { Footer } from './layout/Footer'

import { AppRoutes } from './routes'

export default function App() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
      {isDevEnvironment && <TwBreakpointMonitor />}
    </div>
  )
}

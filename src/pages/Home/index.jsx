/* Home/index.jsx */

import { useAnimation } from './animation/useAnimation'

import { Button } from '../../components/Button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/Dialog'
import { Meta } from '../../components/Meta'

export function Home() {
  // Home page

  const animation = useAnimation()

  return (
    <>
      <Meta />
      <section className="h-full grid items-center bg-slate-50">
        <div ref={animation} className="px-4 py-12 md:py-20 flex flex-col items-center">
          <h2 className="font-platypi text-4xl md:text-7xl text-center">
            This is <span className="display-font">the News.</span>
          </h2>
          <p className="mt-4 md:mt-6 mb-10 md:mb-12 text-center text-pretty text-base md:text-xl">
            Your daily dose of <span className="font-medium">information</span>, directly
            on your screen!
          </p>
          <Dialog>
            <DialogTrigger className="px-[1.5em] py-[.75em] text-base md:text-lg bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
              Get your news now!
            </DialogTrigger>
            <DialogContent className="py-16 bg-slate-50">
              <div className="min-w-72 m-auto">
                <DialogHeader>
                  <DialogTitle className="text-left mb-10 text-xl">
                    Sign in to your account
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                  <label className="font-medium" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    placeholder="Enter your email address"
                    className="h-10 px-2 border border-slate-300 rounded"
                    type="text"
                  />
                </div>
                <div className="mt-4 mb-8 flex flex-col gap-2">
                  <label className="font-medium" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Enter your password"
                    className="h-10 px-2 border border-slate-300 rounded"
                    type="password"
                  />
                </div>
                <Button className="w-full">Sign in</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  )
}

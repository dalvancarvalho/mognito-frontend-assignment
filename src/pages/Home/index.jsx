/* Home/index.jsx */

import { Button } from '../../components/Button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/shadcn/Dialog'

export function Home() {
  return (
    <div className="h-full grid items-center bg-slate-50">
      <div className="px-4 flex flex-col items-center">
        <h1 className="font-platypi text-4xl md:text-7xl self-center">
          This is <span className="font-bold tracking-tighter">the News.</span>
        </h1>
        <p className="mt-6 mb-12 text-base text-center md:text-xl font-medium">
          Your daily dose of <b>information</b>, directly on your screen!
        </p>
        <Dialog>
          <DialogTrigger className="px-8 py-2 bg-slate-700 hover:bg-slate-600 text-lg text-white rounded-lg transition-colors duration-300">
            Log in
          </DialogTrigger>
          <DialogContent className="py-16 bg-slate-50">
            <div className="min-w-72 m-auto">
              <DialogHeader>
                <DialogTitle className="mb-10 text-xl">
                  Enter your credentials:
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
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
                  className="h-10 px-2 border border-slate-300 rounded"
                  type="password"
                />
              </div>
              <Button className="w-full">Log in</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

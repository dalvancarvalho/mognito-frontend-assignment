/* Home/index.jsx */

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/Dialog'

export function Home() {
  return (
    <>
      <h1>Home page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore soluta dolorum
        doloremque amet vitae reprehenderit sed facere, dignissimos illo temporibus
        repellat, natus ipsam minus neque?
      </p>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and
              remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

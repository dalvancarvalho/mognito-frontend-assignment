/* useAnimation.js */

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export function useAnimation() {
  // Home page animation

  const animation = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        animation.current,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          delay: 0.25,
          duration: 1,
          ease: 'power3.expo4',
        }
      )
    }, animation)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return animation
}

import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time: any) => {
      lenis.raf(time / 1.25)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <div>
      <div />
    </div>
  )
}

export default SmoothScroll

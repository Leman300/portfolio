import { useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const ViewAnimate = () => {
  const refView = useRef(null)
  const isInView = useInView(refView, { once: true }) // amount: 0.5
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView, mainControls, slideControls])

  return { mainControls, slideControls, refView, isInView }
}

export default ViewAnimate

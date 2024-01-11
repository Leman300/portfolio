import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const ShowOnScroll = () => {
  const refScrollY = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refScrollY,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return { refScrollY, scaleProgress, scrollYProgress }
}

export default ShowOnScroll

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useAnimation,
} from "framer-motion"
import { wrap } from "@motionone/utils"
import "./about.scss"

interface ParallaxProps {
  children: string
  baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax flex spacing tracking-tight overflow-hidden">
      <motion.div
        className="scroller flex uppercase text-5xl md:text-7xl lg:text-9xl text-blue-200 font-bold"
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  )
}

const AboutScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll()
    }

    window.addEventListener("scroll", scrollHandler)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  useEffect(() => {
    const minScrollY = 480
    const maxScrollY = 2700

    if (scrollY >= minScrollY && scrollY <= maxScrollY) {
      controls.start({ y: scrollY - minScrollY })
    }
  }, [scrollY, controls])
  return (
    <div className="h-[1350px] md:h-[1800px] bg-zinc-950">
      <div className="overflow-hidden h-full -z-50">
        <motion.div
          className="top-1/2 left-0 w-full text-white plaster-font"
          animate={controls}
          transition={{ duration: 0.1 }}
        >
          <ParallaxText baseVelocity={-2}>About me</ParallaxText>
          <ParallaxText baseVelocity={1}>Let&apos;s meet</ParallaxText>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutScroll

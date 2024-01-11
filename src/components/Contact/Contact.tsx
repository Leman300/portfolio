import { useRef, useState } from "react"
import { motion } from "framer-motion"
import ShowOnScroll from "../SmallComponents/ShowOnScroll"

const Contact = () => {
  const {
    refScrollY: refTitle,
    scaleProgress: scaleTitle,
    scrollYProgress: scrollYProgressTitle,
  } = ShowOnScroll()
  const {
    refScrollY: refText,
    scaleProgress: scaleText,
    scrollYProgress: scrollYProgressText,
  } = ShowOnScroll()
  const {
    refScrollY: refButton,
    scaleProgress: scaleButton,
    scrollYProgress: scrollYProgressButton,
  } = ShowOnScroll()

  const refMagnetic = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const mouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e
    const boundingBox = (
      refMagnetic.current as HTMLElement | null
    )?.getBoundingClientRect()

    if (boundingBox) {
      const { height, width, left, top } = boundingBox
      const X = clientX - (left + width / 2)
      const Y = clientY - (top + height / 2)
      setPosition({ x: X, y: Y })
    }
  }

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <section id="contact" className="py-10 bg-black">
      <motion.div className="relative z-10 text-center wrapper cinzel-font text-neutral-50">
        <motion.div
          className="relative z-10 my-20 mt-20 text-center cinzel-font text-neutral-50"
          ref={refTitle}
          style={{
            scale: scaleTitle,
            opacity: scrollYProgressTitle,
          }}
        >
          <h2 className="text-5xl lg:text-6xl xl:text-7xl">Contact</h2>
          <p className="my-4 text-xs sm:text-sm md:text-md">
            &bull; Let&apos; get in touch &bull;
          </p>
        </motion.div>
        <motion.p
          ref={refText}
          style={{
            scale: scaleText,
            opacity: scrollYProgressText,
          }}
          className="py-4 text-xl md:text-2xl lg:text-3xl mx-auto w-1/2 lg:w-3/4 text-[#96b6c5]"
        >
          Explore my achievements - a simple email can pave the way to to
          unlocking exciting possibilities and shaping our successful
          collaboration🤝
        </motion.p>

        <motion.div
          ref={refButton}
          style={{
            scale: scaleButton,
            opacity: scrollYProgressButton,
          }}
        >
          <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x, y }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 50,
              mass: 0.8,
            }}
            className="flex justify-center items-center relative lg:w-[16em] w-[12em] lg:h-[16em] h-[12em]  rounded-full border-2 border-[#96b6c5] mx-auto my-16"
          >
            <motion.a
              onMouseMove={mouseMove}
              onMouseLeave={mouseLeave}
              ref={refMagnetic}
              animate={{ x, y }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
              href="mailto:b.lemanek@wp.pl"
              className="absolute w-[10em] lg:w-[13em] h-[10em] lg:h-[13em] rounded-full bg-[#96b6c5] text-center flex items-center justify-center"
            >
              GET IN TOUCH
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact

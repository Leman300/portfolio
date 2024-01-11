import Typewriter from "typewriter-effect"
import "./hero.scss"
import "../UI/components.scss"
import { PiCaretDownThin } from "react-icons/pi"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import ViewAnimate from "../SmallComponents/ViewAnimate"

const Herotext = () => {
  const { refView, isInView } = ViewAnimate()

  return (
    <div>
      <div className="absolute w-full mx-auto text-white -translate-y-1/2 top-1/2 z-20">
        <div className="relative w-full mx-auto text-xl text-left wrapper sm:w-4/5 sm:text-2xl lg:text-3xl xl:text-4xl">
          <motion.div
            className="flex justify-center sm:justify-start cinzel-font"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 4.45 }}
          >
            <p>Hi&nbsp;</p>
            <p className="wave-shake">👋</p>
            <p>,&nbsp;</p>
            <p> my name is</p>
          </motion.div>

          <motion.h1
            ref={refView}
            className="py-8 text-6xl text-center bl-name asgard-font sm:text-left lg:text-7xl xl:text-8xl"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 4.35 }}
          >
            Bartosz Lemanek
          </motion.h1>

          <motion.div
            ref={refView}
            className="flex justify-center text-xl sm:justify-start sm:text-2xl lg:text-3xl xl:text-4xl cinzel-font"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 4.25 }}
          >
            <p>I am&nbsp;</p>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Web Developer",
                  "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
        </div>
      </div>
      <Link
        to="about"
        spy
        smooth
        offset={-76}
        duration={1500}
        className="absolute z-40 text-5xl text-gray-200 -translate-x-1/2 bounce-top bottom-2 left-1/2 sm:text-6xl lg:text-7xl"
        href="#about"
        aria-label="scroll"
      >
        <PiCaretDownThin />
      </Link>
    </div>
  )
}

export default Herotext

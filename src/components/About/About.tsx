import { motion } from "framer-motion"
import ShowOnScroll from "../SmallComponents/ShowOnScroll"
import TextOnScroll from "../SmallComponents/TextOnScroll"
import AboutPhoto from "./AboutPhoto"

const paragraphs = [
  {
    text: `Hello there! I'm Bartosz, but in the coding world, I'm an
  intrepid graphic designer who decided to go wild in the front-end
  field. My coding adventure began in May 2023 when I decided it was
  time to inject some creativity into my life – to stop being just a
  spectator and become a creator`,
  },
  {
    text: `My fascination with websites goes way back, even before I started uncovering the secrets of coding. I honed my graphic design skills since elementary school. After a few years' hiatus, I returned to the world of pixels. Frankly, that wasn't enough for me. Instead of settling for just design, I set out to make projects not only look beautiful but also function seamlessly.`,
  },
  {
    text: `So, I embarked on my journey as a web designer. But then I thought, why stop at design when I can weave these pages into the web myself? Thus, the front-end initiative was born, where my sites became more than just a plain sketch.`,
  },
  {
    text: `As I explore front-end development, I've become accustomed to spending long hours coding, sometimes from 8 AM to 10 PM. It feels as natural as breathing. I repeated animations so often that I thought I was already an animation also! 😲😄`,
  },
  {
    text: `I constantly evolve, learning from the best, and every mistake is just another step towards perfection. I believe my passion for front-end could be a perfect addition to your team.`,
  },
]

const About = () => {
  const {
    refScrollY: refTitle,
    scaleProgress: scaleTitle,
    scrollYProgress: scrollYProgressTitle,
  } = ShowOnScroll()
  const {
    refScrollY: refPhoto,
    scaleProgress: scalePhoto,
    scrollYProgress: scrollYProgressPhoto,
  } = ShowOnScroll()
  return (
    <section id="about" className="h-full bg-black py-24">
      <div className="relative z-10 wrapper">
        <motion.div
          ref={refTitle}
          style={{
            scale: scaleTitle,
            opacity: scrollYProgressTitle,
          }}
          className="flex flex-col items-center justify-center  text-gray-200 uppercase cinzel-font py-10"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            about me
          </h2>
          <p className="my-4 text-xs sm:text-sm md:text-md">
            &bull; And my front-end history &bull;
          </p>
        </motion.div>
        <motion.div
          ref={refPhoto}
          style={{
            scale: scalePhoto,
            opacity: scrollYProgressPhoto,
          }}
        >
          <AboutPhoto />
        </motion.div>
        <h3 className="w-full text-lg md:text-2xl lg:text-3xl font-bold leading-tight text-white cinzel-font">
          {paragraphs.map((para, index) => (
            <div
              key={index}
              className={`w-2/3 ${
                index % 2 === 0 ? "ms-10" : "ms-auto me-10 text-right"
              } my-40 lg:py-60`}
            >
              <TextOnScroll paragraph={para.text} />
            </div>
          ))}
        </h3>
      </div>
    </section>
  )
}

export default About

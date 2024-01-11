import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FiArrowRight, FiGithub } from "react-icons/fi"
import ShowOnScroll from "../SmallComponents/ShowOnScroll"
import Skills from "./Skills"

import landPortfolioMobile from "../../assets/img/project-lanpages/Optimized-landpage-portfolio.webp"
import landInsightMobile from "../../assets/img/project-lanpages/Optimized-landpage-insight.webp"
import landSpeakgptFalleMobile from "../../assets/img/project-lanpages/Optimized-landpage-speakgptfalle.webp"
import landFurnitureHavenMobile from "../../assets/img/project-lanpages/Optimized-landpage-furnitureHaven.webp"
import landPortfolioDesktop from "../../assets/img/project-lanpages/landpage-portfolio.webp"
import landInsightDesktop from "../../assets/img/project-lanpages/landpage-insight.webp"
import landSpeakgptFalleDesktop from "../../assets/img/project-lanpages/landpage-speakgptfalle.webp"
import landFurnitureHavenDesktop from "../../assets/img/project-lanpages/landpage-furnitureHaven.webp"

interface LinkProps {
  heading: string
  imgSrc: string
  subheading: string
  href: string
  githubHref: string
}

const Link: React.FC<LinkProps> = ({
  heading,
  imgSrc,
  subheading,
  href,
  githubHref,
}) => {
  const { refScrollY, scaleProgress, scrollYProgress } = ShowOnScroll()
  const refGit = useRef<HTMLDivElement>(null)
  const refArrow = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"])
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"])

  const handleMouseMove =
    (ref: React.RefObject<HTMLDivElement | HTMLAnchorElement>) =>
    (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>) => {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return

      const { width, height } = rect
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5

      x.set(xPct)
      y.set(yPct)
    }

  return (
    <motion.div
      ref={refScrollY}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="mb-4 relative"
    >
      <motion.a
        href={href}
        ref={refArrow}
        target="_blank"
        onMouseMove={handleMouseMove(refArrow)}
        initial="initial"
        whileHover="whileHover"
        className="relative z-20 flex items-center justify-between py-4 transition-colors duration-500 border-b-2 group border-neutral-700 hover:border-neutral-50 md:py-8 cinzel-font"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-xl font-bold transition-colors duration-500 text-neutral-500 group-hover:text-neutral-50 md:text-5xl"
          >
            {[...heading].map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 block mt-2 text-sm transition-colors duration-500 text-neutral-500 group-hover:text-neutral-50">
            {subheading}
          </span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 object-cover w-32 h-24 rounded-lg md:h-48 md:w-64 text-neutral-400"
          alt={`Image representing ${heading} page`}
        />
        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-4"
        >
          <FiArrowRight className="text-5xl text-neutral-50" />
        </motion.div>
      </motion.a>
      <motion.div
        ref={refGit}
        initial="initial"
        whileHover="whileHover"
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        onMouseMove={handleMouseMove(refGit)}
        className="absolute right-16 top-5 lg:top-10 z-20 p-5"
      >
        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github link"
        >
          <FiGithub className="text-4xl text-neutral-50" />
        </a>
      </motion.div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  const { refScrollY, scaleProgress, scrollYProgress } = ShowOnScroll()

  return (
    <section
      id="projects"
      className="flex items-center justify-center h-full bg-neutral-950 overflow-x-hidden"
    >
      <div className="wrapper">
        <motion.div
          className="relative z-10 my-20 mt-20 text-center cinzel-font text-neutral-50"
          ref={refScrollY}
          style={{
            scale: scaleProgress,
            opacity: scrollYProgress,
          }}
        >
          <h2 className="text-5xl lg:text-6xl xl:text-7xl">My projects</h2>
          <p className="my-4 text-xs sm:text-sm md:text-md">
            &bull; And skills/tools section &bull;
          </p>
        </motion.div>

        <div className="py-32 mx-8 md:mx-auto lg:hidden">
          <Link
            heading="Portfolio"
            subheading="The project I am most proud of to this day"
            imgSrc={landPortfolioMobile}
            githubHref="https://github.com/Leman300/portfolio"
            href="https://leman300.github.io/portfolio/"
          />
          <Link
            heading="INSIGHT."
            subheading="My first ever contact with TailwindCSS and Vite"
            imgSrc={landInsightMobile}
            githubHref="https://github.com/Leman300/INSIGHT"
            href="https://leman300.github.io/INSIGHT/"
          />
          <Link
            heading="SpeakGPT&nbsp;&&nbsp;FALL-E&nbsp;"
            subheading="ChatGPT and DALL-E clone"
            imgSrc={landSpeakgptFalleMobile}
            githubHref="https://github.com/Leman300/speakgptfalle"
            href="https://leman300.github.io/speakgptfalle/"
          />
          <Link
            heading="Furniture&nbsp;Haven"
            subheading="A website with fine design built to learn Bootstrap"
            imgSrc={landFurnitureHavenMobile}
            githubHref="https://github.com/Leman300/Furniturehaven"
            href="https://leman300.github.io/FurnitureHaven/"
          />
        </div>
        <div className="py-32 mx-8 md:mx-auto hidden lg:block">
          <Link
            heading="Portfolio"
            subheading="The project I am most proud of to this day"
            imgSrc={landPortfolioDesktop}
            githubHref="https://github.com/Leman300/portfolio"
            href="https://leman300.github.io/portfolio/"
          />
          <Link
            heading="INSIGHT."
            subheading="My first ever contact with TailwindCSS and Vite"
            imgSrc={landInsightDesktop}
            githubHref="https://github.com/Leman300/INSIGHT"
            href="https://leman300.github.io/INSIGHT/"
          />
          <Link
            heading="SpeakGPT&nbsp;&&nbsp;FALL-E&nbsp;"
            subheading="ChatGPT and DALL-E clone"
            imgSrc={landSpeakgptFalleDesktop}
            githubHref="https://github.com/Leman300/speakgptfalle"
            href="https://leman300.github.io/speakgptfalle/"
          />
          <Link
            heading="Furniture&nbsp;Haven"
            subheading="A website with fine design built to learn Bootstrap"
            imgSrc={landFurnitureHavenDesktop}
            githubHref="https://github.com/Leman300/Furniturehaven"
            href="https://leman300.github.io/FurnitureHaven/"
          />
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </section>
  )
}

export default Projects

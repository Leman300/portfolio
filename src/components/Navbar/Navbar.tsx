import { useState, useEffect, useRef, useCallback } from "react"
import { Squash as Hamburger } from "hamburger-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-scroll"
import AnimatedLink from "./AnimatedLink"
import "./navbar.scss"
import "../UI/components.scss"
import resumeCV from "../../assets/pdf/CV_EN.pdf"

export const navLinks = [
  { title: "About", href: "/#about" },
  { title: "Projects", href: "/#projects" },
  { title: "Contact", href: "/#contact" },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [scrollingDown, setScrollingDown] = useState(false)
  const navbarRef = useRef(null)

  const handleNav = () => {
    setNav(!nav)
    setOpen(!isOpen)
    document.body.classList.toggle("overflow-hidden", !nav)
  }

  const handleDownloadCV = async () => {
    const response = await fetch(resumeCV)

    if (response.ok) {
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const a = document.createElement("a")
      a.href = url
      a.download = "Bartosz_Lemanek-CV.pdf"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  const closeNavOutsideClick = useCallback(
    (e: { target: any }) => {
      if (
        nav &&
        navbarRef.current &&
        !(navbarRef.current as HTMLElement).contains(e.target)
      ) {
        setNav(false)
        setOpen(false)
        document.body.classList.remove("overflow-hidden")
      }
    },
    [nav],
  )

  const closeNavOnClick = () => {
    setNav(false)
    setOpen(false)
    document.body.classList.remove("overflow-hidden")
  }

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    setScrollingDown(scrollPosition > 0)
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", closeNavOutsideClick)
    window.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("mousedown", closeNavOutsideClick)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [nav, closeNavOutsideClick, handleScroll])

  const navbarClasses = `fixed top-0 z-40 w-full text-white text-xl ${
    scrollingDown ? "glass-nav" : ""
  } ${nav && window.innerWidth <= 1023 ? "no-glass-nav" : ""}`

  return (
    <div ref={navbarRef}>
      <div className={navbarClasses}>
        <div className="flex items-center justify-evenly py-4 lg:py-2 px-4 max-w-[1200px] mx-auto">
          <div className="w-full lg:w-1/6 cinzel-font cursor-pointer">
            <Link
              to="home"
              href="#home"
              spy
              smooth
              offset={0}
              duration={1350}
              onClick={closeNavOnClick}
            >
              PORTFOLIO
            </Link>
          </div>
          <div className="hidden lg:flex asgard-font">
            <div className="flex m-4 gap-4">
              <Link
                to="about"
                href="#about"
                spy
                smooth
                offset={-76}
                duration={1500}
              >
                <AnimatedLink title={navLinks[0].title} />
              </Link>
              <Link
                to="projects"
                href="#projects"
                spy
                smooth
                offset={-76}
                duration={1500}
              >
                <AnimatedLink title={navLinks[1].title} />
              </Link>
              <Link
                to="contact"
                href="#contact"
                spy
                smooth
                offset={-76}
                duration={1500}
              >
                <AnimatedLink title={navLinks[2].title} />
              </Link>
            </div>
          </div>
          <div className="items-center hidden lg:flex">
            <div className="flex">
              <a
                className="p-2 transition hover:scale-125 hover:text-blue-200"
                href="https://github.com/Leman300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <FaGithub size={25} />
              </a>
              <a
                className="p-2 transition hover:scale-125 hover:text-blue-200"
                href="https://www.linkedin.com/in/bartosz-lemanek/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
            <button
              type="button"
              onClick={handleDownloadCV}
              className="hidden mx-4 px-8 lg:block whitespace-nowrap resume-button glass cinzel-font"
            >
              Resume
            </button>
          </div>

          <button
            type="button"
            className="z-30 cursor-pointer lg:hidden"
            onClick={handleNav}
            aria-hidden="true"
          >
            <Hamburger size={28} toggled={isOpen} />
          </button>
        </div>
      </div>

      {/* This code is not refactorized because of the animations */}
      <div className="flex justify-center lg:hidden">
        <div
          className={
            nav
              ? "fixed flex flex-col items-center top-0 right-0 h-screen w-[60%] glass-nav ease-in-out duration-500 z-30"
              : "fixed flex flex-col items-center top-0 right-[-100%] w-[60%] h-screen glass-nav ease-in-out duration-500 z-30"
          }
        >
          <div className="flex flex-col w-full my-auto text-2xl text-white drop-shadow-lg">
            <Link
              to="about"
              href="#about"
              spy
              smooth
              offset={-76}
              duration={500}
              className={
                nav
                  ? "flex justify-center items-center py-10 md:py-12 asgard-font opacity-100 transform translate-x-[0%] ease-in-out duration-700"
                  : "flex justify-center items-center py-10 md:py-12 asgard-font opacity-0 transform translate-x-[100%] ease-in-out duration-100"
              }
              onClick={closeNavOnClick}
              aria-label="about"
            >
              <AnimatedLink title={navLinks[0].title} />
            </Link>
            <Link
              to="projects"
              href="#projects"
              spy
              smooth
              offset={-76}
              duration={1500}
              className={
                nav
                  ? "flex justify-center items-center py-10 md:py-12 text-center asgard-font opacity-100 transform translate-x-[0%] ease-in-out duration-900"
                  : "flex justify-center items-center py-10 md:py-12 text-center asgard-font opacity-0 transform translate-x-[100%] ease-in-out duration-100"
              }
              onClick={closeNavOnClick}
              aria-label="projects"
            >
              <AnimatedLink title={navLinks[1].title} />
            </Link>
            <Link
              to="contact"
              href="#contact"
              spy
              smooth
              offset={-76}
              duration={1500}
              className={
                nav
                  ? "flex justify-center items-center py-10 md:py-12 text-center asgard-font opacity-100 transform translate-x-[0%] ease-in-out duration-1100"
                  : "flex justify-center items-center py-10 md:py-12 text-center asgard-font opacity-0 transform translate-x-[100%] ease-in-out duration-100"
              }
              onClick={closeNavOnClick}
              aria-label="contact"
            >
              <AnimatedLink title={navLinks[2].title} />
            </Link>
            <button
              type="button"
              className={
                nav
                  ? "sm:py-4 py-3 sm:px-20 text-lg sm:text-2xl text-center opacity-100 transform translate-x-[0%] ease-in-out duration-1100 resume-button-sidebar glass mx-4 sm:mx-auto cinzel-font"
                  : "sm:py-4 py-3 sm:px-20 text-lg sm:text-2xl text-center opacity-0 transform translate-x-[100%] ease-in-out duration-100 resume-button-sidebar glass mx-4 sm:mx-auto cinzel-font"
              }
              onClick={handleDownloadCV}
            >
              Resume
            </button>
            <div className="flex items-center justify-center my-8">
              <a
                className="p-4 transition hover:scale-125 hover:text-blue-200"
                href="https://github.com/Leman300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <FaGithub size={45} />
              </a>
              <a
                className="p-4 transition hover:scale-125 hover:text-blue-200"
                href="https://www.linkedin.com/in/bartosz-lemanek/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedin size={45} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

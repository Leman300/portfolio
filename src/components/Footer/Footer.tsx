import { FaGithub, FaLinkedin } from "react-icons/fa"
// import { Link } from "react-scroll"
// import { navLinks } from "../Navbar/Navbar"
// import AnimatedLink from "../Navbar/AnimatedLink"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="w-full bg-neutral-950">
      <div className="wrapper py-10 relative z-10">
        <div className="flex flex-col justify-center items-center lg:grid grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex text-4xl my-6 gap-2 text-neutral-50">
              <a
                className="p-2 transition hover:scale-125 hover:text-blue-200"
                href="https://github.com/Leman300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github logo"
              >
                <FaGithub />
              </a>
              <a
                className="p-2 transition hover:scale-125 hover:text-blue-200"
                href="https://www.linkedin.com/in/bartosz-lemanek-7365b723a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin logo"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <p className="text-neutral-400 ">
            Designed by <span className="asgard-font">Bartosz Lemanek</span> |{" "}
            <span>{currentYear}</span>
          </p>
          <p className="text-neutral-600 mt-4 lg:mt-0 lg:ms-12">
            &copy; All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

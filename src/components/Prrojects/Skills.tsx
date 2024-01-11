import { motion } from "framer-motion"
import { Cloud, renderSimpleIcon, ICloud, renderImg } from "react-icon-cloud"
import allIcons from "simple-icons"
import ShowOnScroll from "../SmallComponents/ShowOnScroll"

const Skills = () => {
  const { refScrollY, scaleProgress, scrollYProgress } = ShowOnScroll()
  const containerProps: ICloud["containerProps"] = {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  }

  const canvasProps: ICloud["canvasProps"] = {}

  const IconATags = [
    { name: "typescript", href: "https://www.typescriptlang.org" },
    { name: "javascript", href: "https://www.javascript.com" },
    { name: "react", href: "https://react.dev" },
    { name: "html5", href: "https://http.cat/status/303" },
    { name: "css3", href: "https://http.cat/status/404" },
    { name: "sass", href: "https://sass-lang.com" },
    { name: "tailwindcss", href: "https://tailwindcss.com" },
    { name: "bootstrap", href: "https://getbootstrap.com" },
    { name: "nodedotjs", href: "https://nodejs.org" },
    { name: "npm", href: "https://www.npmjs.com" },
    { name: "jest", href: "https://jestjs.io" },
    { name: "cypress", href: "https://www.cypress.io" },
    { name: "gulp", href: "https://gulpjs.com" },
    { name: "babel", href: "https://babeljs.io" },
    { name: "github", href: "https://github.com/Leman300" },
    { name: "git", href: "https://git-scm.com" },
    { name: "visualstudiocode", href: "https://code.visualstudio.com" },
    {
      name: "adobephotoshop",
      href: "https://www.adobe.com/pl/products/photoshop.html",
    },
    {
      name: "adobeillustrator",
      href: "https://www.adobe.com/pl/products/illustrator.html",
    },
    { name: "figma", href: "https://www.figma.com" },
  ].map((iconInfo) =>
    renderSimpleIcon({
      icon: allIcons.get(iconInfo.name),
      size: 42,
      aProps: {
        href: iconInfo.href,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: (e) => e.preventDefault(),
      },
    }),
  )

  const ImgATag = [
    renderImg({
      imgProps: {
        src: "https://vitest.dev/logo-shadow.svg",
        alt: "Vitest",
        width: 70,
        height: 70,
      },
      aProps: {
        href: "https://vitest.dev",
        target: "_blank",
        rel: "noreferrer",
      },
    }),
    renderImg({
      imgProps: {
        src: "https://vitejs.dev/logo-with-shadow.png",
        alt: "Vite",
        width: 60,
        height: 60,
      },
      aProps: {
        href: "https://vitejs.dev",
        target: "_blank",
        rel: "noreferrer",
      },
    }),
    renderImg({
      imgProps: {
        src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
        alt: "Framer motion",
        width: 50,
        height: 50,
      },
      aProps: {
        href: "https://www.framer.com/motion/",
        target: "_blank",
        rel: "noreferrer",
      },
    }),
  ]

  const options: ICloud["options"] = {
    clickToFront: 500,
    depth: 1,
    audioVolume: 0,
    imageMode: "image",
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
  }

  return (
    <motion.div
      ref={refScrollY}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="h-full flex flex-col justify-center items-center cinzel-font relative z-10 my-20 mb-52"
    >
      <div className="text-neutral-50 text-xl md:text-3xl mb-4">
        <h2>🧰 My Toolbox/Skills</h2>
        <p className="text-sm md:text-lg text-center my-3">
          &bull; And it still expands 😎 &bull;
        </p>
      </div>
      <div className="text-neutral-50 hover:text-neutral-500 tranisiton ease-in-out duration-300 py-10 relative z-20">
        <Cloud
          containerProps={containerProps}
          canvasProps={canvasProps}
          options={options}
        >
          {IconATags}
          {ImgATag}
        </Cloud>
      </div>
    </motion.div>
  )
}

export default Skills

import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import tape1 from "../../assets/img/tape1.png"
import tape2 from "../../assets/img/tape2.png"
import myFace from "../../assets/img/my-face.webp"

const TiltCard = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  )
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()

    const { width } = rect
    const { height } = rect

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-[#e5e7eb69] to-[#9ca3af4b] mt-24"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid place-content-center rounded-xl shadow-lg bg-[#ffffffb7] "
        >
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(75px)",
            }}
          >
            <img
              src={myFace}
              alt="My face"
              style={{
                transformStyle: "preserve-3d",
              }}
              className="mx-auto rounded-xl w-5/6 h-fit"
            />
            <img
              src={tape2}
              alt=""
              style={{
                transform: "translateZ(35px)",
              }}
              className="absolute -top-12 -left-4 w-3/5"
            />
            <img
              src={tape1}
              alt=""
              style={{
                transform: "translateZ(35px)",
              }}
              className="absolute -bottom-12 -right-4 w-1/2"
            />
          </div>
        </div>
      </motion.div>
      <p className="my-4 text-gray-500 text-center cinzel-font">
        That&apos;s me 🙄
      </p>
    </div>
  )
}

const AboutPhoto = () => {
  return (
    <div className="grid w-full place-content-center px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  )
}

export default AboutPhoto

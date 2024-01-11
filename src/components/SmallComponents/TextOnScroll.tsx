/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion"
import React, { ReactNode, useRef } from "react"
import PropTypes from "prop-types"
import styles from "./style.module.scss"

const TextOnScroll: React.FC<{
  children: ReactNode
  progress: any
  range: any
}> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity, marginLeft: "auto" }}>
        {children}
      </motion.span>
    </span>
  )
}

TextOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  progress: PropTypes.any.isRequired,
  range: PropTypes.any.isRequired,
}

interface ParagraphProps {
  paragraph: string
}

function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.7", "start 0"],
  })

  const words = paragraph.split(" ")

  return (
    <div ref={container} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <TextOnScroll key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </TextOnScroll>
        )
      })}
    </div>
  )
}

export default Paragraph

import { motion } from "framer-motion"
import { useState } from "react"
import PropTypes from "prop-types"

interface AnimatedLetterProps {
  character: string
  animation: any
}

interface AnimatedLinkProps {
  title: string
}

interface AnimatedWordProps {
  title: string
  animation: any
  isHovered: boolean
}

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.009,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.009,
    },
  },
}

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
}

const letterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  character,
  animation,
}) => {
  return (
    <motion.span
      variants={animation}
      className="relative inline-block whitespace-nowrap"
    >
      {character}
    </motion.span>
  )
}

AnimatedLetter.propTypes = {
  character: PropTypes.string.isRequired,
  animation: PropTypes.shape({
    rest: PropTypes.shape({
      y: PropTypes.number,
    }),
    hover: PropTypes.shape({
      y: PropTypes.number,
      transition: PropTypes.shape({
        duration: PropTypes.number,
        ease: PropTypes.arrayOf(PropTypes.number),
        type: PropTypes.string,
      }),
    }),
  }).isRequired,
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({
  title,
  animation,
  isHovered,
}) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative"
    >
      {(title as string)
        .split("")
        .map((character, i) =>
          character === " " ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <AnimatedLetter
              character={character}
              animation={animation}
              key={i}
            />
          ),
        )}
    </motion.span>
  )
}

AnimatedWord.propTypes = {
  title: PropTypes.string.isRequired,
  animation: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  isHovered: PropTypes.bool.isRequired,
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ title }) => {
  const [isHovered, setHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer"
    >
      <AnimatedWord
        title={title}
        animation={letterAnimation}
        isHovered={isHovered}
      />
      <div className="absolute top-0">
        <AnimatedWord
          title={title}
          animation={letterAnimationTwo}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  )
}

AnimatedLink.propTypes = {
  title: PropTypes.string.isRequired,
}

export default AnimatedLink

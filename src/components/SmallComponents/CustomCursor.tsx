import AnimatedCursor from "react-animated-cursor"

const CustomCursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={0}
        outerSize={80}
        outerAlpha={0.2}
        outerScale={6}
        trailingSpeed={7}
        showSystemCursor
        outerStyle={{
          background: "#1b1b1bbd",
          mixBlendMode: "difference",
        }}
        clickables={[
          "a",
          "p",
          "span",
          "h1",
          "h2",
          "h3",
          "img",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  )
}

export default CustomCursor

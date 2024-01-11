// import { motion, useAnimation } from "framer-motion"
// import React, { useEffect } from "react"
// import ReactCurvedText from "react-curved-text"

// const ScrollWheel = () => {
//   const controls = useAnimation()

//   const handleScroll = () => {
//     const scrollY = window.scrollY
//     const rotate = scrollY / 10

//     controls.start({
//       rotate,
//       transition: { ease: "easeInOut", duration: 0.7 },
//       keyframes: [0, 0.25, 0.5, 0.75, 1],
//     })
//   }

//   useEffect(() => {
//     handleScroll() // Dodano wywołanie funkcji handleScroll, aby zainicjować animację bez opóźnienia
//     window.addEventListener("scroll", handleScroll)

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   return (
//     <motion.div
//       animate={controls}
//       className="absolute z-40 text-transparent -translate-x-1/2 -translate-y-1/2 bottom-16 right-10 me-10 asgard-font opacity-40 "
//     >
//       <ReactCurvedText
//         width="300"
//         height={300}
//         cx={150}
//         cy={150}
//         rx="100"
//         ry="100"
//         startOffset="0"
//         reversed={false}
//         text="&bull;&nbsp;&nbsp;Scroll Down &bull; Scroll Down &bull; Scroll Down"
//         textProps={{ style: { fontSize: "28", color: "blue" } }}
//         textPathProps={null}
//         tspanProps={null}
//         ellipseProps={null}
//         svgProps={{ className: "rotating-curved-text" }}
//       />
//     </motion.div>
//   )
// }

// export default ScrollWheel

// <div className="absolute bottom-10 right-36 plaster-font">
//   <div className="around-animation">
//     {Letter.map((item, index) => {
//       return (
//         <span
//           key={index}
//           className="letter"
//           style={{
//             transform: `rotate(${index * 14.5}deg)`,
//           }}
//         >
//           {item}
//         </span>
//       )
//     })}
//   </div>
// </div>

// import "./hero.scss"

// const ScrollWheel = () => {
//   const text = "Scroll-Down-Website"
//   const Letter = text.split("")
//   return (
//     <div className="flex justify-center items-center min-h-[100vh] fixed bg-black plaster-font right-60 z-20">
//       <div className="around-animation">
//         {Letter.map((item, index) => {
//           return (
//             <span
//               key={index}
//               className="letter"
//               style={{
//                 transform: `rotate(${index * 14.5}deg)`,
//               }}
//             >
//               {item}
//             </span>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ScrollWheel

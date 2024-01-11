import React from "react"
import Herotext from "./Herotext"

const videoOverlayPath = import("../../assets/vid/Old-film-overlay.mp4")
const bgVideoDesktopPath = import("../../assets/vid/bgvid-desktop.mp4")
const bgVideoMobilePath = import("../../assets/vid/bgvid-mobile.mp4")

const Hero = () => {
  const [videoOverlay, setVideoOverlay] = React.useState<string | undefined>(
    undefined,
  )
  const [bgVideoDesktop, setBgVideoDesktop] = React.useState<
    string | undefined
  >(undefined)
  const [bgVideoMobile, setBgVideoMobile] = React.useState<string | undefined>(
    undefined,
  )

  React.useEffect(() => {
    videoOverlayPath.then((module) => setVideoOverlay(module.default))
    bgVideoDesktopPath.then((module) => setBgVideoDesktop(module.default))
    bgVideoMobilePath.then((module) => setBgVideoMobile(module.default))
  }, [])

  return (
    <div className="bg-gray-700" id="home">
      <Herotext />
      <div>
        <svg
          className="absolute opacity-80 object-cover w-full h-screen p-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>

          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        <video
          className="absolute object-cover w-full h-screen opacity-60"
          src={videoOverlay}
          autoPlay
          loop
          muted
        />
        <div className="grain-overlay opacity-50" />
      </div>

      <div>
        <div className="fixed z-10 w-full h-screen" />
        <video
          className="object-cover w-full h-screen opacity-60 p-20 hidden lg:block"
          src={bgVideoDesktop}
          autoPlay
          loop
          muted
        />
        <video
          className="object-cover w-full h-screen opacity-60 p-20 block lg:hidden"
          src={bgVideoMobile}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  )
}

export default Hero

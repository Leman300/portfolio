import About from "./components/About/About"
import AboutScroll from "./components/About/AboutScroll"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Prrojects/Projects"
import CustomCursor from "./components/SmallComponents/CustomCursor"
import Preloader from "./components/SmallComponents/Preloader/Preloader"
import SmoothScroll from "./components/SmallComponents/SmoothScroll"

function App() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <CustomCursor />

      <nav>
        <Navbar />
      </nav>

      <header>
        <Hero />
      </header>

      <main>
        <AboutScroll />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App

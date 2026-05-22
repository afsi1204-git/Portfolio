import ParticleNetwork from "./components/ParticleNetwork";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ParticleNetwork />
      <ScrollProgress />
      <Navbar />
      <main className="site-main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

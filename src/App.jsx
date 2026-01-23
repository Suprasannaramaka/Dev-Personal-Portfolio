import { Hero } from "./sections/Hero";
import {About} from "./sections/About";
import {Experience} from "./sections/Experience";
import {Testimonials} from "./sections/Testimonials";
import {Contact} from "./sections/Contact";
import {Projects} from "./sections/Projects";
import {Navbar} from "./layout/Navbar";
function App() {
  return (
    <>
    <div className="min-h-screen overflow-x-hidden">
      <main>
        <Navbar />
    <Hero />
    <About />
    <Projects />
    <Testimonials />
    <Experience />
    <Contact />
      </main>
    </div>
    </>
  );
}

export default App

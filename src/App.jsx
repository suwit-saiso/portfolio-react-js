/**
 * Node models
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLenis from "./useLenis";
import {useGSAP} from '@gsap/react';
/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);
/**
 * Components
 */
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Work from "./assets/components/Work";
import Review from "./assets/components/Review";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

const App = () => {
  useLenis();
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
export default App;

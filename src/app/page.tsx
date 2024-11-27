"use client";

import Header from './components/header/header';
import Hero from './components/presentation/presentation';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import './globals.css';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Home() { 

  const projectsRef = useRef(null); // Reference for the Projects component
  const contactRef = useRef(null); // Reference for the Contact component
  const footerRef = useRef(null); // Reference for the Footer component
  
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-50px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-50px" })
  const isFooterInView = useInView(footerRef, { once: true, margin: "-10px" })


  return (
  <>
      <div className='relative bg-lb dark:bg-background text-lt dark:text-primary'>
        <div id="halo" className="halo-gradient absolute top-0 left-0 w-full h-[250px]"></div>
        <div className="relative container mx-auto text-lt dark:text-white p-4 pb-0  md:pb-0 md:p-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.div variants={fadeInVariants}>
              <Header />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <Hero />
            </motion.div>
            <motion.div
              ref={projectsRef}
              variants={fadeInVariants}
              initial="hidden"
              animate={isProjectsInView ? "visible" : "hidden"}
            >
              <Projects id="projects" />
            </motion.div>
            <motion.div
              ref={contactRef}
              variants={fadeInVariants}
              initial="hidden"
              animate={isContactInView ? "visible" : "hidden"}
            >
              <Contact id="contact" />
            </motion.div>
          </motion.div>
          <motion.footer 
            ref={footerRef}
            variants={fadeInVariants}
            initial="hidden"
            animate={isFooterInView ? "visible" : "hidden"}
            className='relative text-li300 dark:text-impact300'>
              <h2 className='justify-center'>Made With ❤ by leopold maitre</h2>
            </motion.footer>
        </div>
        <section className='relative h-[60px]'>
        <div id="halo-bottom" className="halo-gradient-bottom absolute bottom-0 left-0 w-full h-[60px]"></div>
        </section>
      </div>
  </>
  );
}
   
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Presentation from "./components/presentation/presentation";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import "./globals.css";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {ease: "easeOut", duration: 0.5 },
  },
};

export default function Home() {
  console.log("Home component rendering...");

  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-50px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-50px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-10px" });

  useEffect(() => {
    document.body.setAttribute("data-animation-ready", "true");
  }, []);

  return (
    <>
      <div className="relative bg-pimary dark:bg-background text-lt dark:text-primary">
        <div id="halo" className="halo-gradient absolute top-0 left-0 w-full h-[250px]"></div>
        <div className="relative container mx-auto text-lt dark:text-white p-4 pb-0 md:pb-0 md:p-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.5 },
              },
            }}
          >
            <motion.div
              key="header"
              variants={fadeInVariants}
            >
              <Header />
            </motion.div>
            <motion.div
            key="Hero"
            variants={fadeInVariants}>
              <Hero />
            </motion.div>
            <motion.div
              key="presentation"
              variants={fadeInVariants}
            >
              <Presentation />
            </motion.div>
            <motion.div
              key="projects"
              ref={projectsRef}
              variants={fadeInVariants}
              initial="hidden"
              animate={isProjectsInView ? "visible" : "hidden"}
            >
              <Projects id="projects" />
            </motion.div>
            <motion.div
              key="contact"
              ref={contactRef}
              variants={fadeInVariants}
              initial="hidden"
              animate={isContactInView ? "visible" : "hidden"}
            >
              <About id="about" />
            </motion.div>
          </motion.div>
          <motion.footer
            key="footer"
            ref={footerRef}
            variants={fadeInVariants}
            initial="hidden"
            animate={isFooterInView ? "visible" : "hidden"}
            className=" text-li300 dark:text-impact300"
          >
            <h2 className="justify-center opacity-80">🌐 メタ　レオポルド作成</h2>
          </motion.footer>
        </div>
      <section className="relative h-[60px]">
          <div
            id="halo-bottom"
            className="halo-gradient-bottom  h-full overflow-visible"
          ></div>
        </section>
      </div>
    </>
  );
}
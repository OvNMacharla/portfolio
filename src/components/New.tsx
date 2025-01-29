import React, { useEffect, useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import image from '../assets/image.jpg';
import About from './About/About.tsx';
import Contact from './Contact/Contact.tsx';
import { motion } from "framer-motion";

const New = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Define the expected context type
  const { setScrollToAbout } = useOutletContext<{
    setScrollToAbout: React.Dispatch<React.SetStateAction<(() => void) | null>>;
  }>();
  const { setScrollToContact } = useOutletContext<{
    setScrollToContact: React.Dispatch<React.SetStateAction<(() => void) | null>>;
  }>();

  // Function to create animation state
  const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.3 }
      );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
  };

  const scrollToAbout = () => {
    if (aboutRef.current) aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    if (contactRef.current) contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setScrollToAbout(() => scrollToAbout);
    setScrollToContact(() => scrollToContact);
  }, [setScrollToAbout, setScrollToContact]);

  // Apply animation hooks
  const aboutAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();

  return (
    <>
      {/* Static Section (No animation) */}
      <div className="md:flex items-center">
        <div className="">
          <h1 className="text-[28px] font-[500]">Hey there,</h1>
          <h1 className="text-[70px] font-[500]">I&apos;m Ome</h1>
          <p className="text-[#eb4a4a] text-[19px] font-[500] mb-3">
            - Full-Stack Developer | MERN & Next.js
          </p>
          <p className="text-[18px] text-[#808080] font-[400]">
            Full-stack developer skilled in MERN stack and Next.js, building dynamic, scalable, and user-friendly web applications.
          </p>
        </div>
        <img src={image} className="w-[500px]" />
      </div>

      {/* Animated About Section */}
      <motion.div
        ref={aboutAnimation.ref}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: aboutAnimation.isVisible ? 1 : 0, y: aboutAnimation.isVisible ? 0 : 80 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div ref={aboutRef}>
          <About />
        </div>
      </motion.div>

      {/* Animated Contact Section */}
      <motion.div
        ref={contactAnimation.ref}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: contactAnimation.isVisible ? 1 : 0, y: contactAnimation.isVisible ? 0 : 80 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div ref={contactRef}>
          <Contact />
        </div>
      </motion.div>
    </>
  );
};

export default New;
import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
const HeroSection = () => {
  useGSAP(() => {
    gsap.from('.text-left', {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from('.text-left h1', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from('.text-left p', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.out",
    });
  },);

  return (
    <section className='px-10 md:px-48 lg:px-72'>
      <div className="flex py-10 mt-16 bg-[#ffffff]">
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-[#2337469a] mb-3">Muhammed</h1>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-[#233746]">Nizamudheen.</h1>
          <p className="text-xl md:text-2xl lg:text-4xl mt-4 md:mt-6 lg:mt-8 tracking-wide text-[#cd6242]">Software Developer.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

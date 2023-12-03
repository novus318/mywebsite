import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const InWord = () => {
  const inWordRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      inWordRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
  }, []);

  return (
    <section className="bg-[#233746] text-white py-5 md:py-12 netflix">
      <div ref={inWordRef} className="text-center container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wider mb-4">In Words</h2>
        <div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
            As a self-directed web developer, I am passionate about creating innovative solutions for the web. I bring a creative mindset to every project I undertake, possessing the skills to build both the frontend and backend components of a web application.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4">
            My goal is to craft engaging and user-friendly experiences.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Experienced in both frontend and backend development, committed to creating innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InWord;

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
    <section className="bg-[#23374600] rounded-2xl border-[#2337463f] border-2 text-[#233746] my-7 py-5 md:py-12 inert px-4 mx-5 md:mx-8 lg:mx-36">
      <div ref={inWordRef} className="text-center container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold md:mb-4">In Words</h2>
        <div>
          <p className="text-sm sm:text-base md:text-lg md:mb-4 font-light">
            As a self-directed developer, I am passionate about creating customised solutions for my client. I bring a creative mindset to every project I undertake, with possessing the skills to build both the frontend and backend components of a web application including deployment.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Experienced in both frontend and backend development, committed to creating custom solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InWord;

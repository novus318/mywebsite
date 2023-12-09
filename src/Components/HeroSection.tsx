import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import image from '@/images/nizam1.svg';
import text from '@/images/Text.svg';
import muhammed from '@/images/Asset2.svg';
import nizamudheen from '@/images/Asset3.svg';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const imgRef = useRef(null);
  const muhammedRef = useRef(null);
  const nizamudheenRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1 },
    );
    // Animation for Muhammed from left to right
    gsap.fromTo(
      muhammedRef.current,
      { opacity: 0.5, x: 90 },
      { opacity: 1, x: 0, duration: 1.5,repeat: -1, yoyo: true }
    );

    // Animation for Nizamudheen from right to left
    gsap.fromTo(
      nizamudheenRef.current,
      { opacity: 0.5, x: -100 },
      { opacity: 1, x: 0, duration: 1.5,repeat: -1, yoyo: true  }
    );
  }, []);

  return (
    <section>
      <div className="bg-white h-[550px] md:h-[530px] lg:h-[760px] mt-2 overflow-hidden">
        <div className="bg-white h-auto md:min-h-[700px] flex flex-col md:flex-row items-center justify-center text-white relative">
          <div className="text-center netflix md:w-1/2 p-5 mt-16 md:p-10">
            <div className='my-auto'>
              <div ref={muhammedRef} className="overflow-hidden ml-6 md:ml-8 lg:ml-10 lg:px-5">
                <img
                  src={muhammed.src}
                  alt="Muhammed"
                  className="w-full h-auto transform transition-transform duration-300 ease-in-out mb-4"
                />
              </div>
              <div ref={nizamudheenRef} className='overflow-hidden'>
                <img
                  src={nizamudheen.src}
                  alt="nizamudheen"
                  className="w-full h-auto transform transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#cd6242] uppercase canno mt-4">MERN Developer</p>
            <p className="text-base md:text-lg lg:text-xl  text-[#233746db] typeFont">
              <TypeAnimation
                sequence={[
                  'A self-taught web developer',
                  3000,
                  '- I Build Things for the Web',
                  3000,
                ]}
                repeat={Infinity}
              ></TypeAnimation>
            </p>
          </div>
          <div ref={imgRef} className="md:w-1/2 overflow-hidden p-0 md:p-8 lg:p-11">
            <img
              src={image.src}
              alt="nizam"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <img
          src={text.src}
          alt="transform vission"
          className="w-full h-auto transform transition-transform duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default HeroSection;

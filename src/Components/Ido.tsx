import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import mongo from '@/images/mongo-svgrepo-com.svg'
import express from '@/images/express-svgrepo-com.svg'
import react from '@/images/react-svgrepo-com.svg'
import node from '@/images/node-svgrepo-com.svg'
import JS from '@/images/js-svgrepo-com.svg'
import Html from '@/images/html-5-svgrepo-com.svg'
import Css from '@/images/css-3-svgrepo-com.svg'
import bootsrap from '@/images/bootstrap-svgrepo-com.svg'
import firebase from '@/images/firebase-1-logo-svgrepo-com.svg'
import Aws from '@/images/aws-svgrepo-com.svg'
import Digital from '@/images/digitalocean-svgrepo-com.svg'
import Git from '@/images/github-142-svgrepo-com.svg'
import next from '@/images/next-js-svgrepo-com.svg'
import framer from '@/images/framer-motion.svg'
import gsapsvg from '@/images/gsap-greensock.svg'
import tailwind from '@/images/tailwind-svgrepo-com.svg'
import typescript from '@/images/typescript-svgrepo-com.svg'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const Ido = () => {
  const idoRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      idoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
    const elements = document.querySelectorAll('.animate-fade-in');
    const elementsLast = document.querySelectorAll('.animate-fade-in-last');

    elements.forEach((element: Element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    });
    elementsLast.forEach((element: Element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []);
  const brandImages = [mongo, express, react, next, tailwind, Css, node, JS,typescript, Html, bootsrap];
const brandImages2 = [gsapsvg,firebase, Aws, Digital, Git,framer];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-14">
      <div ref={idoRef} className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#cd6242]">What I Do</h2>
        <div className="flex flex-col md:flex-row mt-4 md:justify-center">
          <div className="mb-8 md:mb-0w-11/12 md:w-1/2 lg:w-5/12 mt-4 md:mt-0 md:mr-4 overflow-hidden">
            <Slider {...settings}>
               {brandImages.map((image,k) => (
                <div key={k} className='p-4 md:p-8'>
                   <img
                  src={image.src}
                  alt="Slider Image 1"
                  className="h-auto rounded-lg"
                />
                  </div>
               ))}
            </Slider>
             <Slider {...settings}>
              {brandImages2.map((image,k) => (
                <div key={k} className='p-4 md:p-8'>
                   <img
                  src={image.src}
                  alt="Slider Image 1"
                  className="w-auto h-auto rounded-lg"
                />
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/2 mt-4 md:mt-0 text-left mx-auto px-4">
  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#233746]">
  I Specialize In
  </h4>
  <ul className="list-disc md:text-base mb-6 text-[#233746] px-5">
    <li className="mb-2 animate-fade-in">
      Bringing ideas to life using Next.js, TypeScript, and JavaScript. Crafting engaging user interfaces and responsive designs with Tailwind CSS.
    </li>
    <li className="mb-2 animate-fade-in">
      Utilizing NPM to manage dependencies and streamline the development process.
    </li>
    <li className="mb-2 animate-fade-in">
      Developing online stores with seamless shopping experiences and secure payment gateways.
    </li>
    <li className="mb-2 animate-fade-in">
      Proficient in using Git for version control and collaboration.
    </li>
    <li className="mb-2 animate-fade-in">
      Experienced in integrating APIs to enhance application functionality.
    </li>
    <li className="mb-2 animate-fade-in">
      Creating robust backend services with Node.js and Express for server-side logic and API development.
    </li>
    <li className="mb-2 animate-fade-in-last">
      Database management with MongoDB for efficient data storage and retrieval.
    </li>
  </ul>
  <p className="mb-8 text-[#233746] md:text-lg text-center font-medium animate-fade-in-last">
    From concept to deployment, I provide end-to-end development solutions by analyzing problems and enhancing user experiences.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default Ido;

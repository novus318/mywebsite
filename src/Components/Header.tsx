import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '@/images/logo.webp';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import resume from '../../public/resume.pdf'
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Use GSAP for animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    if (isMenuOpen) {
      tl.to('.menu-items', { opacity: 1, y: 0, stagger: 0.2 });
      tl.from('.menu-items', { scale: 1, duration: 0.5, ease: 'power2.inOut' }, '-=0.2');
      tl.from('nav', { y: -30, opacity: 0, duration: 0.5, ease: 'power2.inOut' }, '-=0.2');
    } else {
 
      tl.to('.menu-items', { opacity: 0, y: -20, stagger: 0.1 });
    }

    ScrollTrigger.batch('.menu-items', {
      start: 'top 80%',
      onEnter: (batch) => {
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2, overwrite: true });
      },
    });
  }, [isMenuOpen]);
  const downloadResume = () => {
    const resumePath = resume;
  
    window.open(resumePath, '_blank');
  };
  
  return (
    <header className="bg-white text-[#233746] p-4 z-20 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'>
          <img
            src={logo.src}
            alt="nizam"
            className='h-9 md:h-11'
          />
        </Link>
        <nav className={`hidden md:flex items-center gap-10 ${isMenuOpen ? 'hidden' : ''} canno tracking-widest menu-items`}>
          <Link href="/" className="text-[#233746] hover:text-[#cd6242] text-xl">Home</Link>
          <Link href="/about" className="text-[#233746] hover:text-[#cd6242] text-xl">About</Link>
          <Link href="/projects" className="text-[#] hover:text-[#cd6242] text-xl">Projects</Link>
          <Link href="/contact" className="text-[#233746] hover:text-[#cd6242] text-xl">Connect me</Link>
          <button onClick={downloadResume} className="text-white bg-[#cd6242] hover:bg-[#233746db] hover-bg-[#233746db]  mb-2 rounded-full px-5 py-2 text-lg">Resume</button>
        </nav>
        <button
          className="text-white bg-[#cd6242] hover:bg-[#233746] py-2 px-4 rounded-full md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-3 p-2 canno menu-items">
          <Link href="/" className="text-[#233746db] hover:text-[#cd6242] block mb-2 text-lg tracking-wider font-medium">Home</Link>
          <Link href="/about" className="text-[#233746db] hover:text-[#cd6242] block mb-2 text-lg tracking-wider font-medium">About</Link>
          <Link href="/projects" className="text-[#233746db] hover:text-[#cd6242] block mb-2 text-lg tracking-wider font-medium">Projects</Link>
          <Link href="/contact" className="text-[#233746db] hover:text-[#cd6242] block mb-2 text-lg tracking-wider font-medium">Connect me</Link>
          <button onClick={downloadResume} className="text-white bg-[#cd6242] hover:bg-[#233746db] hover-bg-[#233746db]  mb-2 rounded-full px-5 py-2 text-base">Resume</button>
        </nav>
      )}
    </header>
  );
};

export default Header;

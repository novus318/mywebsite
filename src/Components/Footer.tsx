import Link from 'next/link';
import React from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = '+917560845014'; 
  const emailAddress = 'nizamudheen.tech@gmail.com';

  return (
    <footer className="bg-[#233746] text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
       <div className='text-center px-4 tool'>
       <h2 className="text-lg font-semibold md:text-2xl tracking-widest">DECLARATION</h2>
       <p className="text-base md:text-lg mb-4">
          I hereby declare that all the information provided here is authentic to the best of my knowledge.
        </p>
       </div>
       <h3 className="text-center text-base mb-2 font-medium md:text-xl tracking-wider uppercase">Connect me</h3>
        <div className="flex space-x-4">
          <button
            className="hover:text-[#cd6242] transition duration-300"
            onClick={() => {
              window.open(`https://wa.me/${phoneNumber}`, '_blank');
            }}
          >
            <FaWhatsapp size={32} />
          </button>
          <button
            className="hover:text-[#cd6242] transition duration-300"
            onClick={() => {
              window.open(`mailto:${emailAddress}`, '_blank');
            }}
          >
            <FaEnvelope size={32} />
          </button>
          <button
            className="hover:text-[#cd6242] transition duration-300"
            onClick={() => {
              window.open('https://www.linkedin.com/in/muhammednizamudheen', '_blank');
            }}
          >
            <FaLinkedin size={32} />
          </button>
          <button
            className="hover:text-[#cd6242] transition duration-300"
            onClick={() => {
              window.open('https://github.com/novus318', '_blank');
            }}
          >
            <FaGithub size={32} />
          </button>
          <button
            className="hover:text-[#cd6242] transition duration-300"
            onClick={() => {
              window.open(
                'https://instagram.com/n_i_zam___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
                '_blank'
              );
            }}
          >
            <FaInstagram size={32} />
          </button>
        </div>
        <div
            className="text-center mt-4"
          >
            &copy; 2023 by{" "}
            <Link href='/'><span className="text-sm">Muhammed Nizamudheen M</span></Link>
            </div>
      </div>
    </footer>
  );
};

export default Footer;

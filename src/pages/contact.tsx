import React, { useEffect, useState } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import lettercard from '@/images/lettercard.svg'
import pencil from '@/images/pencil.svg'
import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '@/Components/Layout';
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const phoneNumber = '+917560845014'; 
  const emailAddress = 'nizamudheen.tech@gmail.com'; 
  const SERVICE_ID_EMAIL = 'service_3spbets';
  const EMAILJS_TEMPLATE_ID = 'template_v3q7i4l';
  const EMAIL_USER_ID = 'S9OwkwUHVt4r-2P18';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = document.createElement('form');
    form.method = 'post';
    form.action = '';
    const nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.name = 'name';
    nameField.value = formData.name;
    form.appendChild(nameField);

    const emailField = document.createElement('input');
    emailField.type = 'text';
    emailField.name = 'email';
    emailField.value = formData.email;
    form.appendChild(emailField);


    const messageField = document.createElement('textarea');
    messageField.name = 'message';
    messageField.value = formData.message;
    form.appendChild(messageField);

    document.body.appendChild(form);

    setFormData({
      name: '',
      email: '',
      message: '',
    })
    emailjs.sendForm(SERVICE_ID_EMAIL, EMAILJS_TEMPLATE_ID, form, EMAIL_USER_ID)
      .then((result) => {
        console.log('Email sent successfully!', result.text);

      }, (error) => {
        console.error('Email could not be sent:', error);
      });

    document.body.removeChild(form);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const openEmail = () => {
    window.open(`mailto:${emailAddress}`, '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/muhammednizamudheen', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/n_i_zam___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', '_blank');
  };

  useEffect(() => {
    gsap.from('.heading', { opacity: 0, y: -50, duration: 1.5, stagger: 0.2, scrollTrigger: { trigger: '.heading', start: 'top 80%' } });

    gsap.from('.skills', { opacity: 0, y: 50, duration: 1.5, stagger: 0.2, scrollTrigger: { trigger: '.skills', start: 'top 98%' } });
    
    gsap.from('.experience', { opacity: 0, x: 100, duration: 1.5, stagger: 0.2, scrollTrigger: { trigger: '.experience', start: 'top 80%' } });
    gsap.from('.letter-image', {
      opacity: 0,
      x: 100,
      duration: 1.5,
      scrollTrigger: { trigger: '.letter-image', start: 'top 80%' },
    });

    gsap.from('.pencil-image', {
      opacity: 0,
      x: -100,
      duration: 1.5,
      scrollTrigger: { trigger: '.pencil-image', start: 'top 80%' },
    });
    return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill(true);
        });
      };
  }, []);
  return (
    <>
     <Layout
      title="Nizamudheen - Connect Me"
      description="Self-taught web developer,creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."
      keywords="Muhammed Nizamudheen,,nizam,kannur,Nizamudheen,nizamudheen m,skills,Muhammed Nizamudheen m,web developer,web development,contact,software,software engineer,web design,website design,website builder,web designer,ecommerce website,website creator,responsive web design,web development company,best website,web design software,build a website,web developer salary,design website,website layout,web application development,JavaScript,Node.js,Full-Stack Development,Git,Front-end Development,Back-End Web Development"
      author="Muhammed Nizamudheen M"
      canonicalUrl="https://nizamudheen.tech/">
     <Header />
      <section className="bg-white py-14 mt-6 relative">
        <div className="mx-auto overflow-x-hidden">
          <div className="absolute pencil-image top-36 left-24 z-10 transform -translate-x-1/2 -translate-y-1/2">
            <img src={pencil.src} alt="Pencil" className="w-1/2 mb-4 pencil-image" />
          </div>
          <h2 className="heading text-3xl md:text-4xl lg:text-5xl font-bold md:mb-8 text-[#cd6242] text-center">
            Contact Me
          </h2>
          <div>
            <h4 className="text-center py-4 text-lg md:text-xl lg:text-2xl heading">I am excited to engage with you!</h4>
          </div>
          <div className="grid md:grid-cols-2 justify-center items-center relative px-5 md:px-20 letter-image">
            <div className="md:w-1/2 ">
              <img src={lettercard.src} alt="Letter Card" className="w-2/3 md:w-full mx-auto letter-image" />
            </div>
            <div className="my-4">
              <form className="flex flex-col overflow-hidden" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="mb-4 experience p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#cd6242]"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="mb-4 experience p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#cd6242]"
                />

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your message here..."
                  className="mb-4 experience p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-[#cd6242]"
                />

                <button
                  type="submit"
                  className="bg-[#cd6242] text-white py-2 px-4 rounded-md hover:bg-opacity-80"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="justify-center mt-8 skills">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-5 md:px-14 lg:px-24">
              <div className="flex items-center p-4 rounded-lg border border-gray-200 shadow-sm skills" onClick={openWhatsApp}>
                <span className="text-2xl md:text-3xl lg:text-4xl mr-3 text-[#cd6242]"><FaWhatsapp /></span>
                <p className="text-base md:text-lg font-semibold text-[#233746]">WhatsApp</p>
              </div>
              <div className="flex items-center p-4 rounded-lg border border-gray-200 shadow-sm skills" onClick={openEmail}>
                <span className="text-2xl md:text-3xl lg:text-4xl mr-3 text-[#cd6242]"><FaEnvelope /></span>
                <p className="text-base md:text-lg font-semibold text-[#233746]">Email</p>
              </div>
              <div className="flex items-center p-4 rounded-lg border border-gray-200 shadow-sm skills" onClick={openLinkedIn}>
                <span className="text-2xl md:text-3xl lg:text-4xl mr-3 text-[#cd6242]"><FaLinkedin /></span>
                <p className="text-base md:text-lg font-semibold text-[#233746]">Email</p>
              </div>
              <div className="flex items-center p-4 rounded-lg border border-gray-200 shadow-sm skills" onClick={openInstagram}>
                <span className="text-2xl md:text-3xl lg:text-4xl mr-3 text-[#cd6242]"><FaInstagram /></span>
                <p className="text-base md:text-lg font-semibold text-[#233746]">Email</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
     </Layout>
    </>
  );
};

export default Contact;

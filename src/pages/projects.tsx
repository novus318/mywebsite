import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { FiExternalLink } from 'react-icons/fi';
import React, { useEffect } from 'react'
import abyz1 from '@/images/abyz1.svg'
import abyz2 from '@/images/abyz2.svg'
import abyz3 from '@/images/abyz3.svg'
import abyz4 from '@/images/abyz4.svg'
import winndeal1 from '@/images/winndeal1.svg'
import winndeal2 from '@/images/winndeal2.svg'
import winndeal3 from '@/images/winndeal3.svg'
import winndeal4 from '@/images/winndeal4.svg'
import sitara1 from '@/images/sitara1.png'
import sitara2 from '@/images/sitara2.png'
import sitara3 from '@/images/sitara3.png'
import sitara4 from '@/images/sitara4.png'
import netflix from '@/images/netflix.png'
import olx from '@/images/olx.png'
import Link from 'next/link';
import { FaDotCircle, FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '@/Components/Layout';
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const projects = [
    {
      name: 'Abyzplants',
      title: 'All-in-one platform for plant lovers. ',
      description: 'I had the pleasure of working on a remarkable project that catered to the growing community of plant enthusiasts in the UAE. This e-commerce platform was designed and developed from the ground up to provide an exceptional shopping experience for those who appreciate the beauty of greenery.',
      image1: abyz1,
      image2: abyz2,
      image3: abyz3,
      image4: abyz4,
      projectPoints: [
        "The frontend of the platform was crafted using Next.js, TypeScript, and Tailwind CSS. This combination resulted in a visually stunning and responsive user interface, ensuring a seamless shopping experience across various devices.",
        " For the backend, I chose Node.js and Express, paired with MongoDB for data storage. This robust architecture ensures data reliability and scalability, making it possible to accommodate the growing demand for plant purchases.",
        "Admin Panel: The project included a admin panel. Vendors can easily create and edit product listings, categorize items, and efficiently manage user accounts and orders. Generating order bills is now a simplified process.",
        "User Features: On the user side, the platform offers dynamic product listings with advanced filtering options. Shoppers can filter products by categories, prices, and perform efficient searches. The product details page provides comprehensive information, and a user-friendly cart page simplifies the checkout process.",
        "Seamless Transactions: Stripe integration ensures secure and seamless payment processing.simplifying the purchase process.",
        "User Engagement: User registration is straightforward, with user-friendly signup and login functionality. Registered users can manage their profiles, track their orders, and receive updates on order statuses, creating a personalized shopping experience.",
        "Real-time Order Status Notifications: We've implemented a feature where order status updates are sent to customers via email using Nodemailer. This communication keeps buyers informed about the progress of their orders, enhancing their overall shopping experience."

      ],
      endline: 'It was a privilege to contribute to the world of e-commerce and plant appreciation in the UAE.',
      websiteLink: "https://www.abyzplants.com/",
      githubLink: "https://github.com/novus318/Abyzplants",
    },
    {
      name: 'Winndeal',
      title: "IT Solutions Company Website",
      description: "Created a responsive web application using Next.js, to satisfy the needs of an IT Solutions company based in the UAE...",
      image1: winndeal1,
      image2: winndeal2,
      image3: winndeal3,
      image4: winndeal4,
      projectPoints: [
        " Highlighting services, expertise, and mission, providing visitors with a clear understanding of the company's offerings.",
        " Instant Connection: Enhanced communication with WhatsApp and social media integration,making client interaction seamless.",
        " Implemented a user-friendly contact form using EmailJS, enabling visitors to reach out to the company directly. This smooth communication process enhances customer",
        " Engaging Design: A UI with Tailwind,Framer Motion and Gsap animations for a cutting-edge look.",
        "Compatibility with a responsive design approach. The website is optimized for various screen sizes, including smartphones, tablets, and desktops.",
      ],
      endline: 'The Modern technologies and a well-structured codebase sets the project up for future scalability',
      websiteLink: "https://winndeal.com/",
      githubLink: "https://github.com/novus318/winndealuae",
    },
    {
      name: 'Sitara',
      title: "Dynamic Women's Clothing Web Application",
      description: "Successfully designed and developed a dynamic women's clothing web application, implementing a wide range of features...",
      image1: sitara1,
      image2: sitara2,
      image3: sitara3,
      image4: sitara4,
      projectPoints: [
        "Admin can added and updated website banners,enhancing the visual appeal of the application and Efficiently managed product categories, facilitating easy navigation for users.",
        "Implemented a comprehensive product management system, allowing the addition, updating, and deletion of products with multiple photos and detailed information in admin panel",
        "Designed and implemented an easy order management system, streamlining the process for admins to change order statuses in admin panel.",
        " A user-friendly, responsive design for the home page, incorporating banners, categories, best-selling products, and recommended items for an enhanced user experience.",
        "A product details page with multiple photos, enabling users to view products from various angles.",
        "Created a convenient cart system, allowing users to add items by selecting sizes and providing similar product suggestions",
        "Developed a powerful search feature, making it effortless for users to find their desired products",
        "Integrated user profile management, enabling users to edit their profiles and manage their information",
        "Facilitated smooth transactions with a secure (Cash on Delivery) and online payments using the Razorpay payment gateway",
        "Successfully integrated Google login, offering users a convenient option to sign in with their existing Google accounts and also secure and seamless user login and signup functionality"
      ],
      endline: 'Utilizing my skills and idea, this project shows my ability to deliver user-friendly web applications, and showcases my proficiency in both front-end and back-end development.',
      githubLink: "https://github.com/novus318/E-Commerce-SITARA-MERN",
    },
  ];
  const smallProjects = [
    {
      name: 'NETFLIX',
      title: "Clone of netflix page",
      description: "Created a web application of netflix using React,To get latest update on movies and shows...",
      image1: netflix,
      projectPoints: [
        " Implemented a movie browsing experience similar to Netflix's interface.",
        " Utilized the TMDB movie database API for fetching movie information and images.",
        " Categorized movies based on genres, enhancing user experience.",
        " UI design and engaging animations crafted using Framer Motion.",
        "Integrated YouTube trailers for each movie, providing additional information.",
        "Hosted the application on Netlify for easy accessibility.",
      ],
      endline: 'The contents and data is dynamically updated automatically',
      websiteLink: "https://netfi.netlify.app/",
      githubLink: "https://github.com/novus318/netflix-clone",
    },
    {
      name: 'OLX',
      title: "Clone of Olx Basic Features",
      description: "Developed a web application similar to OLX, featuring user authentication, product listing, and viewing capabilities. The backend is powered by Firebase, and the frontend is built with React.js.",
      image1: olx,
      projectPoints: [
        "Implemented user authentication to allow users to create accounts and log in.",
        "Designed user interfaces for adding and viewing products, ensuring an intuitive experience.",
        "Utilized Firebase for backend services such as authentication and data storage.",
        " Created a user-friendly dashboard for users to manage their product listings.",
      ],
      endline: 'Combining backend and frontend technologies,I created a platform for buying and selling products.',
      githubLink: "https://github.com/novus318/olx",
    }
  ]
  useEffect(() => {
    gsap.from('.head', { opacity: 0, x: -50, duration: 1.5, stagger: 0.2, scrollTrigger: { trigger: '.head', start: 'top 80%' } });
    gsap.from('.image1', { opacity: 0, y: -50, duration: 1.5, stagger: 0.2, scrollTrigger: { trigger: '.image1', start: 'top 80%' } });

    gsap.from('.images', { opacity: 0, y: 50, duration: 1.5, stagger: 0.2, scrollTrigger: { trigger: '.images', start: 'top 80%' } });

    gsap.from('.content', { opacity: 0, x: 50, duration: 1.5, stagger: 0.2, scrollTrigger: { trigger: '.content', start: 'top 80%' } });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []);
  return (
    <>
     <Layout
     title="Nizamudheen - Projects"
     description="Self-taught web developer,creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."
     keywords="Muhammed Nizamudheen,,nizam,kannur,Nizamudheen,nizamudheen m,skills,Muhammed Nizamudheen m,web developer,web development,software,software engineer,web design,website design,website builder,web designer,ecommerce website,website creator,responsive web design,web development company,best website,web design software,build a website,web developer salary,design website,website layout,web application development,JavaScript,Node.js,Full-Stack Development,Git,Front-end Development,Back-End Web Development"
     author="Muhammed Nizamudheen M"
     canonicalUrl="https://nizamudheen.tech/">
     <Header />
      <section className="bg-white mt-16">
        <div className="mx-auto head pt-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#cd6242] text-center head">Projects</h2>
          <div className="px-4 md:px-10 overflow-x-hidden">
            <div className="mb-8">
              {projects.map((project, index) => (
                <>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-[#233746] head text-center md:my-4">{project.name}</h2>
                <div key={index} className="flex flex-col md:flex-row mb-10 image1 overflow-x-hidden">
                  <div className="md:w-1/2 px-10 md:px-28 py-5 mb-4">
                    <img src={project.image1.src} alt={project.name} className="w-full mb-4 image1 drop-shadow-xl" />
                    <div className="flex gap-x-8 justify-center images">
                      <img src={project.image2.src} alt={project.name} className="w-1/4 images drop-shadow-xl " />
                      <img src={project.image3.src} alt={project.name} className="w-1/4 images drop-shadow-xl" />
                      <img src={project.image4.src} alt={project.name} className="w-1/4 images drop-shadow-xl" />
                    </div>
                  </div>
                  <div className="md:w-1/2 content overflow-hidden mx-auto md:mt-4">
                    <h3 className="text-lg md:text-xl lg:text-2xl text-[#cd6242] mb-4 content">{project.title}</h3>
                    <p className="mb-4 font-medium text-sm md:text-base  text-[#233746] content">{project.description}</p>
                    <ul className="mb-3 list-disc text-[#233746] pl-5 text-sm md:text-base content">
                      {project.projectPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="mb-2 flex items-start content">
                          <span className="mr-2 mt-1">
                            <FaDotCircle className="text-[#cd6242]" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mb-4 text-[#233746] font-normal text-center content">{project.endline}</p>
                    <div className="flex space-x-4 items-center content">
                      {project.websiteLink && (
                        <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#cd6242] font-semibold hover:underline">
                          <span className="mr-2">Visit Website</span>
                          <FiExternalLink className="h-5 w-5" />
                        </Link>
                      )}
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#cd6242] font-semibold hover:underline">
                        <span className="mr-2">GitHub Repository</span>
                        <FaGithub className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-t-2 border-[#cd6242] mt-6 mb-8 mx-auto w-1/2 md:w-1/4 lg:w-1/6 md:hidden"></div>
                </div></>
              ))}
            </div>
            <div className="mb-8">
              {smallProjects.map((project, index) => (
                <>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-[#233746] head text-center my-2 md:my-4">{project.name}</h2>
                <div key={index} className="flex flex-col md:flex-row mb-10 image1 overflow-x-hidden">
                  <div className="md:w-1/2 px-10 md:px-28 py-5 mb-4">
                    <img src={project.image1.src} alt={project.name} className="w-full mb-4 image1 drop-shadow-xl" />
                  </div>
                  <div className="md:w-1/2 content overflow-hidden mx-auto md:mt-4">
                    <h3 className="text-lg md:text-xl lg:text-2xl text-[#cd6242] mb-4 content">{project.title}</h3>
                    <p className="mb-4 font-medium text-sm md:text-base  text-[#233746] content">{project.description}</p>
                    <ul className="mb-3 list-disc text-[#233746] pl-5 text-sm md:text-base content">
                      {project.projectPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="mb-2 flex items-start content">
                          <span className="mr-2 mt-1">
                            <FaDotCircle className="text-[#cd6242]" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mb-4 text-[#233746] font-normal text-center content">{project.endline}</p>
                    <div className="flex space-x-4 items-center content">
                      {project.websiteLink && (
                        <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#cd6242] font-semibold hover:underline">
                          <span className="mr-2">Visit Website</span>
                          <FiExternalLink className="h-5 w-5" />
                        </Link>
                      )}
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#cd6242] font-semibold hover:underline">
                        <span className="mr-2">GitHub Repository</span>
                        <FaGithub className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-t-2 border-[#cd6242] mt-6 mb-8 mx-auto w-1/2 md:w-1/4 lg:w-1/6 md:hidden"></div>
                </div></>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
     </Layout>
    </>
  )
}

export default Projects
import { FaGraduationCap, FaCode, FaLaptopCode, FaBriefcase, FaDatabase } from 'react-icons/fa';
import { SiReact, SiMongodb, SiCss3, SiTailwindcss, SiGit, SiBootstrap, SiRedux, SiNodedotjs, SiNextdotjs, SiExpress, SiJavascript, SiAmazonaws } from 'react-icons/si';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const skills = [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Typescript', icon: <FaCode /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'RESTful APIs', icon: <FaLaptopCode /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'Data structures', icon: <FaDatabase /> },
    { name: 'Integrations', icon: <FaLaptopCode /> },
    { name: 'AWS', icon: <SiAmazonaws /> },
];

const education = [
    {
        degree: 'Web Development',
        institution: 'Self-taught',
        duration: '[Progress]',
        details: [
            'Learned various web development technologies and frameworks.',
            'Built projects for practical skills.',
            'Developed responsive and user-friendly web applications using my skills.',
            'Built RESTful APIs using Node.js and Express.js for backend development.',
            'Managed version control system using Git and GitHub.',
        ],
        icon: <FaGraduationCap />,
    },
    {
        degree: 'B.VOC-Software Development',
        institution: 'St.Aloysius College (Mangalore)',
        duration: '[2021-2023 (March)]',
        details: [
            'Enrolled in a software development program at St.Aloysius (Autonomous) College.',
            'Attended classes on basic programming, data structure, and networking.',
            'Completed the 2nd year and decided to focus on self-learning.',
        ],
        icon: <FaGraduationCap />,
    },
    {
        degree: 'Higher Secondary',
        institution: 'AKGVHSS (Payyannur)',
        duration: '[2019-2021]',
        details: ['Completed higher secondary education with a focus on science.'],
        icon: <FaGraduationCap />,
    },
];

const experience = [
    {
        position: 'Software Developer',
        company: 'Winndeal (UAE)',
        year: 'Mar 2023 - present',
        details: [
            'Collaborate with cross-functional teams to analyze project requirements and design efficient software solutions.',
            'Develop, test, and deploy high-quality code in accordance with best practices.',
            'Participate in code reviews, providing constructive feedback to enhance team performance.',
            'Troubleshoot, debug, and resolve software defects and issues promptly.',
            'Stay current with industry trends and incorporate emerging technologies to improve software development processes.',
            'Collaborate with product managers and UX/UI designers to create seamless, user-friendly applications.'
        ],
        website: 'winndeal.com',
        webUrl:'https://www.winndeal.com/',
        icon: <FaBriefcase />,
    },
    {
        position: 'Freelancer',
        company: 'Abyzplants (UAE)',
        year: '2023',
        details: [
            'Successfully completed the project within the timeline, meeting all deadlines and client expectations.',
            'Managed project resources efficiently to ensure the project was delivered within budget, optimizing cost-effectiveness.',
            'Designed a highly scalable system, ensuring the website can accommodate increased traffic and product listings as the business grows.',
            'Implemented testing and quality control measures, resulting in a bug-free and reliable e-commerce platform.',
            'Maintained open communication with the client throughout the project, incorporating feedback and ensuring their vision was realized, resulting in a highly satisfied client.',
        ],
        website: 'abyzplants.com',
        webUrl:'https://www.abyzplants.com/',
        icon: <FaBriefcase />,
    },
];
gsap.registerPlugin(ScrollTrigger);
const About = () => {
    useEffect(() => {
        gsap.from('.heading', { opacity: 0, y: -50, duration: 1, stagger: 0.2, scrollTrigger: { trigger: '.heading', start: 'top 80%' } });

        gsap.from('.skills', { opacity: 0, y: 50, duration: 1, stagger: 0.2, scrollTrigger: { trigger: '.skills', start: 'top 80%' } });
        
        gsap.from('.experience', { opacity: 0, y: 50, duration: 1, stagger: 0.2, scrollTrigger: { trigger: '.experience', start: 'top 80%' } });
        gsap.from('.educations', {
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: { trigger: '.educations', start: 'top 80%' },
        });
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
              trigger.kill(true);
            });
          };
      }, []);
    return (
        <>
            <section id='about' className="bg-white">
                <div className="mx-auto">
                    <div className="mb-8 px-4 md:px-32">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#233746] heading">Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 skills">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center p-4 rounded-lg border border-gray-200 shadow-sm skills">
                                    <span className="text-2xl md:text-3xl lg:text-4xl mr-3 text-[#cd6242]">{skill.icon}</span>
                                    <p className="text-base md:text-lg font-semibold text-[#233746]">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-8 px-4 md:px-32">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#233746] heading">Education</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 educations">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:shadow-lg educations">
                                    <div className="bg-[#cd6242] p-3 text-white text-center">
                                        <span className="text-xl md:text-2xl">{edu.icon}</span>
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <p className="text-sm md:text-xl font-bold text-[#233746] mb-1">{edu.degree}</p>
                                        <p className="text-xs md:text-base text-[#233746] mb-1">{edu.institution}</p>
                                        <p className="text-xs md:text-base text-[#233746] mb-2">{edu.duration}</p>
                                        <ul className="list-disc text-[#233746]">
                                            {edu.details.map((d, idx) => (
                                                <li key={idx} className="mb-1 text-xs md:text-sm">{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mx-auto px-4 md:px-32'>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#233746] heading">Technical experience</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 experience">
                            {experience.map((exp, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md experience">
                                    <div className="flex items-center mb-4">
                                        <span className="text-4xl text-[#cd6242]">{exp.icon}</span>
                                        <div className="ml-4">
                                            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#233746] mb-1">{exp.position}</p>
                                            <p className="text-xs md:text-base text-[#233746]">{exp.company}</p>
                                            <p className="text-xs md:text-base text-[#233746]">{exp.year}</p>
                                        </div>
                                    </div>
                                    <ul className="list-disc text-[#233746] mb-4">
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx} className="mb-1 text-xs">{detail}</li>
                                        ))}
                                    </ul>
                                    <p className="text-base md:text-lg lg:text-base text-[#233746]">
                                        Website: <a href={exp.webUrl} className="text-[#cd6242]">{exp.website}</a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;

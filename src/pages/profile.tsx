import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineGlobal, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';



const ContactCard: React.FC = () => {
  const handleMessage = (phoneNumber:any) => {
  
    window.location.href = `https://wa.me/${phoneNumber}`;
  };
  
    
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl mx-auto mt-5" data-v0-t="card">
      <div className="flex flex-col p-6 space-y-2">
      <div className="flex justify-between space-x-4">
        <div className="flex items-center">
          <span className="relative flex-shrink-0 overflow-hidden rounded-full w-16 h-16">
            <span className="flex items-center justify-center bg-muted rounded-full border border-gray-200 dark:border-gray-800 overflow-hidden w-16 h-16">
              <img
                src="/profile.jpeg"
                alt='profile'
                className="object-cover w-full h-full"
              />
            </span>
          </span>
          <div className="grid ml-4 text-sm sm:text-base">
            <div className="font-bold">Muhammed Nizamudheen</div>
            <div className="text-gray-500 dark:text-gray-400">Software Developer</div>
          </div>
        </div>
        <button
         onClick={() => handleMessage('+971569367867')} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#333] text-[#fff] hover:bg-[#333333c4] h-9 rounded-md px-3">
          Message
        </button>
      </div>
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
        Add to Contacts
      </button>
    </div>
    <div className="p-6 grid gap-4 text-sm">
        <div className="space-y-1.5">
          <label className="text-sm flex gap-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
            <AiOutlineMail /> Email
          </label>
          <div className="font-medium">nizam@winndeal.com</div>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm flex gap-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">
            <AiOutlinePhone /> Phone
          </label>
          <div className="font-medium">+971 56 936 7867</div>
        </div>
      <div className="space-y-1.5">
        <label className="text-sm flex gap-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="website">
          <AiOutlineGlobal /> Website
        </label>
        <div className="font-medium">nizamudheen.tech</div>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/novus318" target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/muhammednizamudheen/" target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin size={24} />
        </a>
        <a href="https://instagram.com/n_i_zam___" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram size={24} />
        </a>
        <a href="https://wa.me/+971569367867" target="_blank" rel="noopener noreferrer">
          <AiOutlineWhatsApp size={24} />
        </a>
      </div>
    </div>
    </div>
  );
};

export default ContactCard;

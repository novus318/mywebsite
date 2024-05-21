import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import Ido from "@/Components/Ido";
import InWord from "@/Components/InWord";
import Layout from "@/Components/Layout";
import About from "@/Components/About";


export default function Home() {
  return (
   <>
   <Layout 
   title="Muhammed Nizamudheen M | Software developer"
   description="Self-taught web developer,creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."
   keywords="Muhammed Nizamudheen,web design,uae,website design,dubai,sharjah,Abu Dhabi,website builder,ecommerce website,web design company,web development company,web developer salary,how to design a website,nizam,kannur,Nizamudheen,nizamudheen m,Muhammed Nizamudheen m,web developer,web development,software,software engineer,web design,website design,website builder,web designer,ecommerce website,website creator,responsive web design,web development company,best website,web design software,build a website,web developer salary,design website,website layout,web application development,JavaScript,Node.js,Full-Stack Development,Git,Front-end Development,Back-End Web Development"
   author="Muhammed Nizamudheen M"
   canonicalUrl="https://nizamudheen.tech/">
   <Header/>
   <HeroSection/>
   <InWord/>
   <Ido/>
   <About/>
   <Footer/>
   </Layout>
   </>
  )
}

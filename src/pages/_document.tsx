import { Html, Head, Main, NextScript } from 'next/document'
import * as gtag from '../../gtag.mjs';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gtag.GA_TRACKING_ID}');`,
            }}
          />
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P36Q2NCP');`,
            }}
            async/>
          {/* End Google Tag Manager */}
      </Head>
      <link
          rel="icon"
          type="image/png"
          sizes="32x22"
          href="/logo.webp"
        />
       
        <meta name="theme-color" content="#cd6242" />
    <meta name="description" content="Self-taught web developer,creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."/>
    <meta name="keywords" content="nizamudheen,muhammed nizamudheen,muhammed nizamudheen m,web developer,web development,software,software developer,software engineer,mern stack,react,full-stack,Best freelance web designer, Web Designer Near me, freelance web designer in Gurgaon, Best freelance web designer in Delhi, freelance web developer, freelance website developers in Gurgaon, freelance website developers in delhi"/>
    <meta name="author" content="Muhammed Nizamudheen M"/>
    <meta property="og:title" content="Nizamudheen"/>
    <meta property="og:description" content="Self-taught web developer, creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."/>
    <meta property="og:url" content="https://nizamudheen.tech/"/>
    <meta property="og:image" content="https://nizamudheen.tech/nizam3.png"/>
    <meta name="twitter:card" content="https://nizamudheen.tech/nizam3.png" />
    <meta property="og:type" content="website"/>

    <meta name="twitter:title" content="Nizamudheen"/>
    <meta name="twitter:description" content="Self-taught web developer, creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."/>
    <meta name="twitter:image" content="https://nizamudheen.tech/nizam3.png"/>
    <meta name="twitter:url" content="https://nizamudheen.tech/"/>
    <title>Nizamudheen</title>
      <body>
         {/* Google Tag Manager (noscript) */}
         <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-P36Q2NCP`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

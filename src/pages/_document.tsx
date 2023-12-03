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
      </Head>
      <link
          rel="icon"
          type="image/png"
          sizes="32x22"
          href="/logo.webp"
        />
          <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
/>      
        <meta name="theme-color" content="#cd6242" />
    <meta name="description" content="Self-taught web developer,creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."/>
    <meta name="keywords" content="nizamudheen,muhammed nizamudheen,muhammed nizamudheen m,web developer,web development,software,software developer,software engineer,mern stack,react,full-stack"/>
    <meta name="author" content="Muhammed Nizamudheen M"/>
    <meta property="og:title" content="Nizamudheen"/>
    <meta property="og:description" content="Self-taught web developer, creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."/>
    <meta property="og:url" content="https://nizamudheen.tech/"/>
    <meta property="og:image" content="https://nizamudheen.tech/nizam3.png"/>
    <meta property="og:type" content="website"/>

    <meta name="twitter:title" content="Nizamudheen"/>
    <meta name="twitter:description" content="Self-taught web developer, creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application."/>
    <meta name="twitter:image" content="https://nizamudheen.tech/nizam3.png"/>
    <meta name="twitter:url" content="https://nizamudheen.tech/"/>
    <title>Nizamudheen</title>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.tailwindcss.com" async/>
      </body>
    </Html>
  )
}

import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollUp from '@/Components/ScrollUp'
interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonicalUrl: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  author,
  canonicalUrl,
}) => {
  const escapedCanonicalUrl = canonicalUrl.replace(/["]/g, '\\"');

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "WebPage",
            "url": "${escapedCanonicalUrl}"
          }`}
        </script>
        <link rel="canonical" href={canonicalUrl} />
        <title>{title}</title>
      </Helmet>
      {children}
      <ScrollUp/>
    </div>
  );
};

Layout.defaultProps = {
    title:'Nizamudheen',
    description:'Self-taught web developer,creates innovative solutions for the web and skilled to build both the frontend and backend components of a web application.',
    keywords:'nizamudheen,Muhammed Nizamudheen,web developer,web development,software,software engineer',
    author:'Muhammed Nizamudheen M',
  canonicalUrl: 'https://nizamudheen.tech/',
};

export default Layout;

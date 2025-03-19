import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image }) => {
  const siteTitle = "Your Portfolio";
  const siteDescription = "Full Stack Developer Portfolio showcasing projects and skills";
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />

      {/* OpenGraph meta tags for social media */}
      <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2196f3" />
      <meta name="keywords" content="portfolio, developer, full stack, react, javascript, web development" />
      <meta name="author" content="Your Name" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;

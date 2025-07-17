import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO: React.FC = () => {
  const location = useLocation();
  
  const defaultTitle = 'Ali Hassan - AI & IT Solutions Developer';
  const defaultDescription = 'Turning ideas into secure, privacy-first digital solutions. Specializing in AI, automation, and modern web development.';
  const siteUrl = 'https://alihassan.dev';
  const currentUrl = `${siteUrl}${location.pathname}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ali Hassan',
    url: siteUrl,
    jobTitle: 'AI & IT Solutions Developer',
    description: defaultDescription,
    sameAs: [
      'https://linkedin.com/in/ali-hassan',
      'https://github.com/ali-hassan'
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Web Development',
      'Automation',
      'Docker',
      'Python',
      'JavaScript',
      'System Integration'
    ]
  };

  return (
    <Helmet>
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content="AI, IT Solutions, Web Development, Automation, Docker, Python, JavaScript, Ali Hassan" />
      <meta name="author" content="Ali Hassan" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Ali Hassan Portfolio" />
      <meta property="og:image" content={`${siteUrl}/img/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}/img/og-image.jpg`} />
      <meta name="twitter:creator" content="@alihassan" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* PWA */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#1E90FF" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ali Hassan" />
      <link rel="apple-touch-icon" href="/img/icon-192x192.png" />

      {/* Preload fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;
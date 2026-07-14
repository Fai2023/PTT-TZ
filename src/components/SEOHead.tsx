import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  image = "https://ik.imagekit.io/8jn9lgbbcw/web/banner.png?updatedAt=1740474919382",
  url = "https://phoenix.tz"
}: SEOHeadProps) {
  const { t } = useLanguage();

  const finalTitle = title || t('siteTitle');
  const finalDescription = description || t('siteDescription');
  const finalKeywords = keywords || t('siteKeywords');

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

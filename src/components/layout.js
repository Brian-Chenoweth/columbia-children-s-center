import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { container, heading, content } from './styles/layout.module.scss';
import Navi from '../components/navi';
import Footer from '../components/footer';
import Header from '../components/header';
import favicon from '../images/favicon.ico';

const buildBreadcrumbs = (siteUrl, pathname, pageTitle) => {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '') + '/';
  const crumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
  ];

  if (normalizedPath !== '/') {
    crumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: pageTitle,
      item: `${siteUrl}${normalizedPath}`,
    });
  }

  return crumbs;
};

const Layout = ({
  pageTitle,
  titleOverride,
  metaDesc,
  pathname = '/',
  imagePath,
  noIndex = false,
  schemaType = 'WebPage',
  schemaData = [],
  children,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
          image
          business {
            name
            email
            telephone
            telephoneDisplay
            foundingDate
            priceRange
            streetAddress
            addressLocality
            addressRegion
            postalCode
            addressCountry
            latitude
            longitude
            openingHours {
              opens
              closes
            }
          }
          socialMedia {
            facebook
            instagram
            youtube
          }
        }
      }
    }
  `);

  const { siteMetadata } = data.site;
  const siteUrl = siteMetadata.siteUrl.replace(/\/$/, '');
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '') + '/';
  const canonical = `${siteUrl}${normalizedPath === '/' ? '/' : normalizedPath}`;
  const metaDescription = metaDesc || siteMetadata.description;
  const title = titleOverride || (pageTitle === siteMetadata.title
    ? siteMetadata.title
    : `${pageTitle} | ${siteMetadata.title}`);
  const imageUrl = `${siteUrl}${imagePath || siteMetadata.image}`;
  const business = siteMetadata.business;

  const baseSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteMetadata.title,
        description: siteMetadata.description,
        inLanguage: 'en-US',
      },
      {
        '@type': 'ChildCare',
        '@id': `${siteUrl}/#organization`,
        name: business.name,
        url: `${siteUrl}/`,
        image: imageUrl,
        logo: imageUrl,
        description: siteMetadata.description,
        email: business.email,
        telephone: business.telephone,
        foundingDate: business.foundingDate,
        priceRange: business.priceRange,
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.streetAddress,
          addressLocality: business.addressLocality,
          addressRegion: business.addressRegion,
          postalCode: business.postalCode,
          addressCountry: business.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: business.latitude,
          longitude: business.longitude,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: business.openingHours.opens,
            closes: business.openingHours.closes,
          },
        ],
        areaServed: ['Santa Maria', 'Orcutt', 'Nipomo'],
        sameAs: [
          siteMetadata.socialMedia.facebook,
          siteMetadata.socialMedia.instagram,
          siteMetadata.socialMedia.youtube,
        ],
      },
      {
        '@type': schemaType,
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description: metaDescription,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
        breadcrumb: {
          '@id': `${canonical}#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: buildBreadcrumbs(siteUrl, normalizedPath, pageTitle),
      },
      ...schemaData,
    ],
  };

  return (
    <div className={pageTitle.toLowerCase()}>
      <main className={container}>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={metaDescription} />
          <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
          <meta name="geo.region" content="US-CA" />
          <meta name="geo.placename" content="Santa Maria" />
          <meta name="ICBM" content={`${business.latitude}, ${business.longitude}`} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content={normalizedPath === '/' ? 'website' : 'article'} />
          <meta property="og:site_name" content={siteMetadata.title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:url" content={canonical} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:alt" content="Columbia Children's Center preschool in Santa Maria, California" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={imageUrl} />
          <link rel="canonical" href={canonical} />
          <link rel="icon" href={favicon} type="image/x-icon" />
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6753339908489719"
            crossOrigin="anonymous"
          />
          <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
        </Helmet>
        <Header />
        <Navi />
        {pageTitle === siteMetadata.title ? (
          <h1 className={heading} style={{ display: 'none' }}>{pageTitle}</h1>
        ) : (
          <h1 className={heading}>{pageTitle}</h1>
        )}
        <div className={content}>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;

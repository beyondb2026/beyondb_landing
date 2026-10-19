import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#DB215F',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://beyondbsolutions.com/#org',
      name: 'Beyond B',
      url: 'https://beyondbsolutions.com/',
      logo: 'https://beyondbsolutions.com/favicon-32x32.png',
      slogan: 'AI Product Experience Layer',
      description:
        'Beyond B helps customers set up, use and get support for physical products, and helps manufacturers reduce support calls and returns.',
      email: 'hello@beyondbsolutions.com',
      sameAs: ['https://x.com/beyondb_hq'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://beyondbsolutions.com/#website',
      url: 'https://beyondbsolutions.com/',
      name: 'Beyond B',
      publisher: { '@id': 'https://beyondbsolutions.com/#org' },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600&family=Montserrat:wght@300;400;600;700;800&family=Instrument+Sans:wght@400;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

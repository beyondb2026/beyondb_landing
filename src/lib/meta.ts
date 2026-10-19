import type { Metadata } from 'next';

export const SITE = 'https://beyondbsolutions.com';
const OG_IMAGE = {
  url: `${SITE}/og-image.png`,
  width: 1200,
  height: 630,
  alt: 'Beyond B AI Product Experience Layer: interactive component markers on physical products',
};

export function buildMeta(o: {
  title: string;
  description: string;
  path: string;
  ogTitle: string;
  ogDescription: string;
}): Metadata {
  return {
    metadataBase: new URL(SITE),
    title: o.title,
    description: o.description,
    applicationName: 'Beyond B',
    authors: [{ name: 'Beyond B' }],
    referrer: 'strict-origin-when-cross-origin',
    alternates: { canonical: o.path },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    icons: { icon: [{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }] },
    openGraph: {
      type: 'website',
      siteName: 'Beyond B',
      locale: 'en_IN',
      url: o.path,
      title: o.ogTitle,
      description: o.ogDescription,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@beyondb_hq',
      title: o.ogTitle,
      description: o.ogDescription,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}

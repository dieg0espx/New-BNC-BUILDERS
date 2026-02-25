import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { defaultMetadata } from '@/lib/utils/metadata';
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/seo/JsonLd';

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#CF9C39" />
        {/* Enhanced OpenGraph and Social Media Compatibility */}
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://bncbuilders.com'}/openGraph.png`} />
        <meta property="og:image:secure_url" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://bncbuilders.com'}/openGraph.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BNC Builders - Home Remodeling" />
        {/* Twitter/X Card Tags */}
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://bncbuilders.com'}/openGraph.png`} />
        <meta name="twitter:image:alt" content="BNC Builders - Home Remodeling" />
        {/* WhatsApp and Messaging Apps */}
        <link rel="image_src" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://bncbuilders.com'}/openGraph.png`} />
        <meta itemProp="image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://bncbuilders.com'}/openGraph.png`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geologica:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WPZSVJGL');`,
          }}
        />
      </head>
      <body className={`${ptSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPZSVJGL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16672110303"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16672110303');
          `}
        </Script>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <ScrollToTop />
        <Header />
        <main className="min-h-screen pt-[72px] md:pt-[112px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

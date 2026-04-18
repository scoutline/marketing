import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import Script from 'next/script';
import './globals.css';

// Serif display font — used for all headings
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Scoutline - The Operating System for Modern Law Firms',
  description:
    'AI-powered legal intelligence with verifiable citations. Every answer traceable to the exact page and line.',
  openGraph: {
    title: 'Scoutline',
    description: 'The Operating System for Modern Law Firms.',
    url: 'https://usescoutline.com',
    siteName: 'Scoutline',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scoutline',
  },
  metadataBase: new URL('https://usescoutline.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${GeistSans.variable}`}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FC8DRB79Z0"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FC8DRB79Z0');
          `}
        </Script>
      </head>
      <body className="bg-page text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

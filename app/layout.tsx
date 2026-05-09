import type { Metadata } from 'next';
import { JetBrains_Mono, Zen_Kaku_Gothic_New } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const zen = Zen_Kaku_Gothic_New({
  variable: '--font-zen',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const siteUrl = 'https://www.rithiksai.com';
const title = 'Rithik Sai — Engineer Portfolio';
const description = 'Portfolio of Rithik Sai — AI Engineer, iOS Developer, and builder of AI products and workflow systems.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'Rithik Sai — Engineer Portfolio',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Rithik Sai Portfolio',
    images: [{ url: '/opengraph-image' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${zen.variable} ${mono.variable} font-display`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

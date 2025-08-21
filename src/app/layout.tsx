import type { Metadata } from 'next';

import { ThemeProvider } from '@/providers/ThemeProvider';

import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { PixelatedBottomGradient } from '@/components/PixelatedBottomGradient';

import '@/styles/globals.css';

import { space_grotesk } from './fonts';

export const metadata: Metadata = {
  title: 'Łukasz Bielecki Portfolio',
  description: 'My portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={space_grotesk.className} suppressHydrationWarning>
      <body className="flex h-screen flex-col">
        <PixelatedBottomGradient />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header>
            <Nav />
          </header>
          <main className="flex-grow px-4 md:px-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

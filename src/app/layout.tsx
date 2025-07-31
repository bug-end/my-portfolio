import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/providers/theme-provider';

import { Nav } from '@/components/Nav';

import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin-ext'],
  display: 'swap',
});

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
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="border-b">
            <Nav />
          </header>
          <main className="flex-grow max-w-7xl py-8 px-4 mx-auto w-full">{children}</main>
          <footer className="border-t text-sm text-muted-foreground">
            <div className="max-w-7xl mx-auto py-4 px-4">
              © {new Date().getFullYear()} Łukasz Bielecki. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

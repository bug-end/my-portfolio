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
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="border-b">
            <Nav />
          </header>
          <main className="mx-auto max-w-7xl flex-grow px-4 py-8">{children}</main>
          <footer className="text-muted-foreground border-t text-sm">
            <div className="mx-auto max-w-7xl px-4 py-4">
              © {new Date().getFullYear()} Łukasz Bielecki. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

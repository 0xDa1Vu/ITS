import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vehicle Rental',
  description: 'Cho thuê phương tiện',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body>
        <Header />
        <main style={{ minHeight: '60vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>
        <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee' }}>
          <h1 style={{ margin: 0 }}>Vehicle Rental</h1>
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}

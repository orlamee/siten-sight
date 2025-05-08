import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SiteNSight | Where Construction Minds Learn, Build, and Connect',
  description: 'Where Construction Minds Learn, Build, and Connect',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

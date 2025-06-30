import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Off Record - Developer Resources & Insights',
  description: 'A curated collection of developer resources, best practices, and insights for modern web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SkeletonLoader>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SkeletonLoader>
        <Toaster />
      </body>
    </html>
  );
}
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WebSideBar from '@/components/layout/WebSideBar';
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
          <main className="min-h-screen bg-black text-white">
            <Header />
            
            <div className="content flex">
              <div className="SideBarContainer">
                <WebSideBar showCategories={true} showBecomeMember={true} />
              </div>
              
              <div className="body flex-1">
                {children}
              </div>
            </div>
            
            <Footer />
          </main>
        </SkeletonLoader>
        <Toaster />
      </body>
    </html>
  );
}
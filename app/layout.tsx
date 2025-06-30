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
          <div className="min-h-screen bg-black text-white">
            {/* Fixed Header */}
            <Header />
            
            {/* Main Content Container */}
            <div className="flex pt-20"> {/* pt-20 accounts for fixed header height */}
              {/* Fixed Sidebar Container */}
              <div className="sidebar-container">
                <WebSideBar showCategories={true} showBecomeMember={true} />
              </div>
              
              {/* Main Content Body */}
              <div className="content-body flex-1 min-h-screen">
                {children}
              </div>
            </div>
            
            {/* Footer */}
            <Footer />
          </div>
        </SkeletonLoader>
        <Toaster />
      </body>
    </html>
  );
}
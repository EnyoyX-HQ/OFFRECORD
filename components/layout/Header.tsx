"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  // Don't show header on admin pages
  if (pathname.startsWith('/admin')) {
    return null;
  }
  
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur-sm">
      <div className="w-full max-w-[1512px] mx-auto px-10 py-5 flex items-center justify-between">
        <Link href="/users" className="flex items-center space-x-2">
          <span className="text-gray-400 text-xl font-extrabold font-['Inter'] uppercase">OFF-RECORD</span>
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="/users/content" className="text-gray-400 hover:text-white transition-colors">Content</Link>
          <Link href="/users/build-with" className="text-gray-400 hover:text-white transition-colors">Build With</Link>
          <Link href="/users/digests" className="text-gray-400 hover:text-white transition-colors">Digests</Link>
          <Link href="/users/best-practices" className="text-gray-400 hover:text-white transition-colors">Best Practices</Link>
        </div>

        <div className="flex items-center">
          <span className="text-gray-400 text-base font-normal font-['Inter'] lowercase">become a volunteer</span>
        </div>
      </div>
    </nav>
  );
}
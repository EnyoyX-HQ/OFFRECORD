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
    <nav className="fixed top-0 z-[60] w-full border-b border-zinc-800 bg-black">
      <div className="w-full max-w-[1512px] mx-auto px-10 py-5 flex items-center justify-between relative">
        {/* Logo - Left Side */}
        <Link href="/users" className="flex items-center space-x-2">
          <span className="text-gray-400 text-xl font-extrabold font-['Inter'] uppercase">OFF-RECORD</span>
        </Link>

        {/* Menu Items - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
          <Link href="/users/content" className="text-gray-400 hover:text-white transition-colors">Content</Link>
          <Link href="/users/build-with" className="text-gray-400 hover:text-white transition-colors">Build With</Link>
          <Link href="/users/digests" className="text-gray-400 hover:text-white transition-colors">Digests</Link>
          <Link href="/users/best-practices" className="text-gray-400 hover:text-white transition-colors">Best Practices</Link>
        </div>

        {/* Become a Member Button - Right Side */}
        <div className="flex items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors font-inter font-medium text-sm">
            become a member
          </button>
        </div>
      </div>
    </nav>
  );
}
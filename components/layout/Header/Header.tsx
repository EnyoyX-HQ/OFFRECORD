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
    <header className="fixed top-0 left-0 right-0 z-[60] bg-black border-b border-zinc-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link 
            href="/users" 
            className="flex items-center group"
          >
            <span className="text-white text-lg font-bold tracking-wider uppercase transition-colors group-hover:text-blue-400">
              OFF-RECORD
            </span>
          </Link>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/users/content" 
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.includes('/content') ? 'text-white' : 'text-gray-400'
              }`}
            >
              Content
            </Link>
            <Link 
              href="/users/build-with" 
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.includes('/build-with') ? 'text-white' : 'text-gray-400'
              }`}
            >
              Build With
            </Link>
            <Link 
              href="/users/digests" 
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.includes('/digests') ? 'text-white' : 'text-gray-400'
              }`}
            >
              Digests
            </Link>
            <Link 
              href="/users/best-practices" 
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname.includes('/best-practices') ? 'text-white' : 'text-gray-400'
              }`}
            >
              Best Practices
            </Link>
          </nav>

          {/* CTA Button - Right */}
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black">
              Become a Member
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-zinc-800/50 py-4 space-y-2">
          <Link 
            href="/users/content" 
            className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Content
          </Link>
          <Link 
            href="/users/build-with" 
            className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Build With
          </Link>
          <Link 
            href="/users/digests" 
            className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Digests
          </Link>
          <Link 
            href="/users/best-practices" 
            className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Best Practices
          </Link>
        </div>
      </div>
    </header>
  );
}
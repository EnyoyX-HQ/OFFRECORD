"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Don't show header on admin pages
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const navigationItems = [
    { href: '/users/content', label: 'Content' },
    { href: '/users/build-with', label: 'Build With' },
    { href: '/users/digests', label: 'Digests' },
    { href: '/users/best-practices', label: 'Best Practices' },
  ];

  const isActiveLink = (href: string) => {
    return pathname.includes(href.split('/').pop() || '');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/users" 
            className="flex items-center group transition-all duration-300"
          >
            <span className="text-white text-xl font-extrabold tracking-wider uppercase hover:text-blue-400 transition-colors duration-300">
              OFF-RECORD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-white group ${
                  isActiveLink(item.href) ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black">
              Become a Member
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 border-t border-zinc-800/30' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                  isActiveLink(item.href)
                    ? 'text-white bg-zinc-800/50'
                    : 'text-gray-400 hover:text-white hover:bg-zinc-800/30'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="px-4 pt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
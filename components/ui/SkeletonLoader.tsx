"use client";

import { useState, useEffect } from 'react';

interface SkeletonLoaderProps {
  children: React.ReactNode;
}

const SkeletonLoader = ({ children }: SkeletonLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonScreen />;
  }

  return <>{children}</>;
};

const SkeletonScreen = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black">
        <div className="w-full max-w-[1512px] mx-auto px-10 py-5 flex items-center justify-between">
          <div className="h-6 w-32 bg-zinc-800 rounded animate-pulse"></div>
          <div className="flex items-center space-x-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-16 bg-zinc-800 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="h-4 w-28 bg-zinc-800 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex">
        {/* Sidebar Skeleton */}
        <div className="w-300 border-r border-zinc-800 p-8">
          <div className="space-y-6">
            {/* Avatar Group */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="w-8 h-8 bg-zinc-800 rounded-full animate-pulse"></div>
              ))}
            </div>
            
            {/* Text Block */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-zinc-800 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-zinc-800 rounded animate-pulse"></div>
            </div>
            
            {/* Button */}
            <div className="h-8 w-32 bg-zinc-800 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 space-y-12">
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-12 w-3/4 bg-zinc-800 rounded animate-pulse"></div>
              <div className="h-6 w-full bg-zinc-800 rounded animate-pulse"></div>
              <div className="h-6 w-2/3 bg-zinc-800 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-zinc-900 rounded-xl p-6 animate-pulse">
                <div className="h-full flex flex-col justify-end space-y-3">
                  <div className="h-6 w-3/4 bg-zinc-800 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-zinc-800 rounded"></div>
                    <div className="h-4 w-5/6 bg-zinc-800 rounded"></div>
                    <div className="h-4 w-2/3 bg-zinc-800 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section Title */}
          <div className="h-8 w-48 bg-zinc-800 rounded animate-pulse"></div>

          {/* Content Cards */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-zinc-900 rounded-xl p-6 animate-pulse">
                <div className="h-full flex flex-col justify-end">
                  <div className="h-8 w-5/6 bg-zinc-800 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Grid */}
          <div className="space-y-4">
            <div className="h-8 w-56 bg-zinc-800 rounded animate-pulse"></div>
            <div className="grid grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-28 bg-zinc-900 rounded-xl flex items-center justify-center animate-pulse">
                  <div className="w-12 h-12 bg-zinc-800 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Text */}
          <div className="h-4 w-48 bg-zinc-800 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="border-t border-zinc-800 p-8 text-center">
        <div className="h-4 w-48 bg-zinc-800 rounded animate-pulse mx-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
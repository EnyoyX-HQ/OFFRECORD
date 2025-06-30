"use client";

import { FunctionComponent } from 'react';
import { useRouter } from 'next/navigation';

interface CardContentProps {
  title: string;
}

const CardContent: FunctionComponent<CardContentProps> = ({ title }) => {
  const router = useRouter();
  
  const handleClick = () => {
    // Create a slug from the title
    const slug = title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters first
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, '');   // Remove leading/trailing hyphens
    router.push(`/users/content/${slug}`);
  };

  return (
    <div 
      className="group cursor-pointer bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300 hover:-translate-y-1"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </div>
      </div>
    </div>
  );
};

export default CardContent;
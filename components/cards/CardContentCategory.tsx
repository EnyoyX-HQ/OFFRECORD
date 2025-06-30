"use client";

import { FunctionComponent } from 'react';
import { useRouter } from 'next/navigation';

interface CardContentCategoryProps {
  title: string;
  description: string;
}

const CardContentCategory: FunctionComponent<CardContentCategoryProps> = ({ title, description }) => {
  const router = useRouter();
  
  const handleClick = () => {
    // Create a slug from the title and navigate to category page
    let slug = title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters first
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, '');   // Remove leading/trailing hyphens
    
    // Handle special cases for routing
    if (slug === 'build-with') {
      slug = 'build-with';
    } else if (slug === 'best-practices') {
      slug = 'best-practices';
    }
    
    router.push(`/users/category/${slug}`);
  };

  return (
    <div 
      className="group cursor-pointer bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300 hover:-translate-y-1"
      onClick={handleClick}
    >
      <div className="space-y-3">
        <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </div>
        <div className="text-gray-600 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default CardContentCategory;
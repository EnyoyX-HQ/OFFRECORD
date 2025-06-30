"use client";

import { FunctionComponent } from 'react';
import CardContent from './cards/CardContent';

interface CategoryListProps {
  category?: string;
  title?: string;
  description?: string;
}

const CategoryList: FunctionComponent<CategoryListProps> = ({ 
  category = 'engineering',
  title = 'best practices for non technical founders',
  description = 'A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI. Stay ahead of the curve with resources that matter.'
}) => {
  return (
    <div className="w-full bg-black overflow-hidden flex flex-col items-center justify-start text-left text-sm text-gray-400 font-inter min-h-screen">
      <div className="flex-1 flex flex-col items-start justify-start p-16 gap-10 max-w-5xl w-full mx-auto">
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="w-full text-5xl font-extrabold lowercase bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent leading-tight">
            {title}
          </div>
          <div className="w-full text-base leading-6 lowercase text-gray-400">
            {description}
          </div>
        </div>
        
        <div className="flex flex-col items-start justify-start gap-8 w-full">
          <div className="flex flex-col items-start justify-start">
            <div className="w-full text-xl font-medium lowercase bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              curated for you
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-2 w-full">
            <CardContent title="Setting up your next js project for scalability" />
            <CardContent title="Deploying a blockchain app using algorand" />
            <CardContent title="Setting up a test & production server for your application" />
          </div>
          <div className="flex flex-row items-start justify-start gap-2 w-full">
            <CardContent title="Building secure authentication systems" />
            <CardContent title="Database optimization strategies" />
            <CardContent title="API design best practices" />
          </div>
        </div>
        
        <div className="flex flex-row items-center justify-start w-full text-sm">
          <div className="flex-1 leading-5 text-gray-400">Last updated on Dec 4, 2024</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
"use client";

import { FunctionComponent } from 'react';
import CategoryList from '@/components/CategoryList';

const BestPracticesPage: FunctionComponent = () => {
  return (
    <CategoryList 
      category="best-practices"
      title="best practices for non technical founders"
      description="A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI. Stay ahead of the curve with resources that matter."
    />
  );
};

export default BestPracticesPage;
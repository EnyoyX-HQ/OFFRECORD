"use client";

import { FunctionComponent } from 'react';
import { useParams } from 'next/navigation';
import CategoryList from '@/components/CategoryList/CategoryList';

const CategoryPage: FunctionComponent = () => {
  const params = useParams();
  const slug = params.slug as string;

  // Map slugs to display data
  const categoryData = {
    'best-practices': {
      title: 'best practices for non technical founders',
      description: 'A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI. Stay ahead of the curve with resources that matter.'
    },
    'prompting': {
      title: 'prompting techniques and strategies',
      description: 'Master the art of AI prompting with proven techniques and strategies. Learn how to craft effective prompts that get you better results.'
    },
    'build-with': {
      title: 'build with modern tools',
      description: 'Discover the latest tools, frameworks, and platforms that modern founders use to ship faster and build better products.'
    }
  };

  const data = categoryData[slug as keyof typeof categoryData] || {
    title: slug.replace('-', ' '),
    description: 'Explore curated content and resources for this category.'
  };

  return (
    <CategoryList 
      category={slug}
      title={data.title}
      description={data.description}
    />
  );
};

export default CategoryPage;
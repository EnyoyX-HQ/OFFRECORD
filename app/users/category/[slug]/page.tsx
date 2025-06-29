import { FunctionComponent } from 'react';
import CategoryList from '@/components/CategoryList';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const CategoryPage: FunctionComponent<CategoryPageProps> = ({ params }) => {
  const { slug } = params;
  
  // Map slug to appropriate title and description
  const getCategoryData = (slug: string) => {
    switch (slug) {
      case 'best-practices':
        return {
          category: 'engineering',
          title: 'best practices for non technical founders',
          description: 'A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI. Stay ahead of the curve with resources that matter.'
        };
      case 'prompting':
        return {
          category: 'engineering',
          title: 'prompting techniques and strategies',
          description: 'Master the art of AI prompting with proven techniques and strategies. Learn how to craft effective prompts that get you better results.'
        };
      case 'build-with':
        return {
          category: 'engineering',
          title: 'build with modern tools',
          description: 'Discover the latest tools, frameworks, and platforms that modern founders use to ship faster and build better products.'
        };
      default:
        return {
          category: 'engineering',
          title: `${slug.replace('-', ' ')} resources`,
          description: 'A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI.'
        };
    }
  };

  const categoryData = getCategoryData(slug);

  return <CategoryList {...categoryData} />;
};

export default CategoryPage;
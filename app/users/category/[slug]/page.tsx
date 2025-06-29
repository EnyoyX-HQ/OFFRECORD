import { FunctionComponent } from 'react';
import CategoryList from '@/components/CategoryList';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Required for static export
export async function generateStaticParams() {
  return [
    { slug: 'best-practices' },
    { slug: 'prompting' },
    { slug: 'build-with' },
    { slug: 'design' },
    { slug: 'engineering' },
    { slug: 'goto-market' },
    { slug: 'compliance' }
  ];
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
      case 'design':
        return {
          category: 'design',
          title: 'design resources and inspiration',
          description: 'Curated design resources, UI/UX best practices, and creative inspiration for modern digital products.'
        };
      case 'goto-market':
        return {
          category: 'goto-market',
          title: 'go-to-market strategies',
          description: 'Strategic insights and proven methodologies for launching and scaling your product in the market.'
        };
      case 'compliance':
        return {
          category: 'compliance',
          title: 'compliance and legal guidance',
          description: 'Essential compliance requirements, legal considerations, and regulatory guidance for modern businesses.'
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
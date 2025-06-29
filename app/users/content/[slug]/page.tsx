import { FunctionComponent } from 'react';
import FullSinglePost from '@/components/FullSinglePost';

interface ContentPageProps {
  params: {
    slug: string;
  };
}

// Required for static export
export async function generateStaticParams() {
  return [
    { slug: 'setting-up-your-next-js-project-for-scalability' },
    { slug: 'deploying-a-blockchain-app-using-algorand' },
    { slug: 'setting-up-a-test-production-server-for-your-application' },
    { slug: 'building-secure-authentication-systems' },
    { slug: 'database-optimization-strategies' },
    { slug: 'api-design-best-practices' }
  ];
}

const ContentPage: FunctionComponent<ContentPageProps> = ({ params }) => {
  const { slug } = params;
  
  // Convert slug back to title
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return <FullSinglePost title={title.toLowerCase()} />;
};

export default ContentPage;
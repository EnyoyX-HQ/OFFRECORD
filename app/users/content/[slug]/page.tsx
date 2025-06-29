import { FunctionComponent } from 'react';

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
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white">{title}</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              This is a detailed article about {title.toLowerCase()}. Content would be loaded here based on the slug: {slug}
            </p>
            <p className="text-gray-400">
              In a real application, this content would be fetched from a CMS, markdown files, or a database based on the slug parameter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
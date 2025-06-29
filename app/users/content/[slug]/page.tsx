"use client";

import { FunctionComponent } from 'react';
import { useParams } from 'next/navigation';

const ContentPage: FunctionComponent = () => {
  const params = useParams();
  const slug = params.slug as string;

  // Convert slug back to title
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 text-lg mb-8">
              This is a detailed article about {title.toLowerCase()}. Content coming soon...
            </p>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Article Content</h2>
              <p className="text-gray-300">
                This article will provide comprehensive insights and practical guidance on {title.toLowerCase()}.
                Stay tuned for detailed content that will help you implement these concepts in your projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
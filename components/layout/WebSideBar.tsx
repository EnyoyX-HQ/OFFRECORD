"use client";

import { FunctionComponent } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface WebSideBarProps {
  showBecomeMember?: boolean;
  showCategories?: boolean;
}

const WebSideBar: FunctionComponent<WebSideBarProps> = ({ 
  showBecomeMember = true, 
  showCategories = true 
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show sidebar on admin pages
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const categories = [
    { id: 'design', label: 'design', path: '/users/category/design' },
    { id: 'engineering', label: 'engineering', path: '/users/category/engineering' },
    { id: 'goto-market', label: 'goto market', path: '/users/category/goto-market' },
    { id: 'compliance', label: 'compliance', path: '/users/category/compliance' }
  ];

  const handleCategoryClick = (path: string) => {
    router.push(path);
  };

  const isActiveCategory = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="fixed top-20 left-0 w-80 h-[calc(100vh-80px)] flex flex-col justify-between p-10 border-r border-zinc-700 bg-black z-40 overflow-y-auto">
      <div className="flex flex-col flex-1 w-full">
        {showCategories && (
          <div className="w-full">
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`text-sm leading-5 lowercase cursor-pointer transition-colors duration-200 ${
                    isActiveCategory(category.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => handleCategoryClick(category.path)}
                >
                  {category.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {showBecomeMember && (
          <div className="w-full mt-auto">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row">
                  <img className="w-8 h-8 rounded-full object-cover" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                  <img className="w-8 h-8 rounded-full object-cover -ml-3" alt="" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" />
                  <img className="w-8 h-8 rounded-full object-cover -ml-3" alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" />
                  <img className="w-8 h-8 rounded-full object-cover -ml-3" alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" />
                  <img className="w-8 h-8 rounded-full object-cover -ml-3" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" />
                  <img className="w-8 h-8 rounded-full object-cover -ml-3" alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face" />
                  <img className="w-8 h-8 rounded-full object-cover -ml-3" alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face" />
                </div>
                <div className="text-sm leading-5 lowercase text-gray-400">
                  join a community of locked-in founders shipping their ideas with ai
                </div>
              </div>
              <button className="rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center px-3 py-1 text-white text-sm transition-colors duration-200">
                become a member
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebSideBar;
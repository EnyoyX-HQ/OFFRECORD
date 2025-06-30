"use client";

import { FunctionComponent, ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Home, 
  FileText, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  LogOut
} from 'lucide-react';

interface DashboardLayoutProps {
  children?: ReactNode;
  activeSection?: 'home' | 'content' | 'users';
  title?: string;
  subtitle?: string;
  showPagination?: boolean;
  currentPage?: number;
  totalItems?: number;
  itemsPerPage?: number;
}

const DashboardLayout: FunctionComponent<DashboardLayoutProps> = ({
  children,
  activeSection = 'home',
  title = 'keep sharing knowledge',
  subtitle,
  showPagination = true,
  currentPage = 1,
  totalItems = 56,
  itemsPerPage = 6
}) => {
  const router = useRouter();
  const [currentUser] = useState({
    name: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face'
  });

  const menuItems = [
    { id: 'home', label: 'home', icon: Home, href: '/admin/dashboard' },
    { id: 'content', label: 'content', icon: FileText, href: '/admin/content' },
    { id: 'users', label: 'users', icon: Users, href: '/admin/users' }
  ];

  const handleMenuClick = (href: string) => {
    router.push(href);
  };

  const handleCreateContent = () => {
    router.push('/admin/create-content');
  };

  const handleSignOut = () => {
    router.push('/users');
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="w-full bg-black min-h-screen overflow-hidden flex flex-col items-center justify-start text-center text-xl text-gray-400 font-inter">
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-start p-5 border-b border-zinc-700">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="uppercase font-extrabold text-gray-400">OFF-RECORD</div>
          <div className="flex flex-row items-center justify-start gap-5 text-left text-sm">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="lowercase text-blue-500 cursor-pointer hover:text-blue-400 transition-colors" onClick={handleSignOut}>
                sign out
              </div>
              <img 
                className="w-6 h-6 rounded-full object-cover" 
                alt="User avatar" 
                src={currentUser.avatar}
              />
            </div>
            <button 
              className="rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center px-3 py-1 text-white text-sm transition-colors"
              onClick={handleCreateContent}
            >
              create content
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full flex-1 flex flex-col items-start justify-between text-left text-sm">
        <div className="w-full flex-1 flex flex-row items-start justify-start max-w-6xl mx-auto">
          {/* Sidebar */}
          <div className="w-75 flex flex-col items-start justify-start p-10 border-r border-zinc-700">
            <div className="w-full flex flex-col items-start justify-start gap-1">
              <div className="w-full lowercase font-medium text-gray-600 mb-4">menu</div>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <div 
                    key={item.id}
                    className={`w-full flex flex-row items-center justify-start gap-2 p-2 cursor-pointer transition-colors ${
                      isActive 
                        ? 'text-white bg-blue-500/10 rounded-lg' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => handleMenuClick(item.href)}
                  >
                    <Icon className="w-4 h-4" />
                    <div className="lowercase">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Container */}
          <div className="flex-1 flex flex-col items-start justify-start p-10">
            <div className="w-full flex flex-col items-start justify-start mb-8">
              <div className="w-full">
                <div className="text-xl font-medium lowercase bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-2">
                  {title}
                </div>
                {subtitle && (
                  <div className="text-base leading-6 text-gray-400 mb-4">{subtitle}</div>
                )}
                {showPagination && (
                  <div className="flex flex-row items-center justify-between w-full mt-4">
                    <div className="text-xs font-medium text-gray-400">
                      showing {startItem}-{endItem} of {totalItems}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        className="w-8 h-8 rounded-lg border border-zinc-700 bg-transparent flex items-center justify-center cursor-pointer transition-all hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-400" />
                      </button>
                      <button 
                        className="w-8 h-8 rounded-lg border border-zinc-700 bg-transparent flex items-center justify-center cursor-pointer transition-all hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="flex-1 w-full min-h-96">
              {children}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex flex-row items-center justify-center p-5 text-base border-t border-zinc-700">
          <div className="flex-1 text-center text-gray-400">© 2025 build in off record -</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
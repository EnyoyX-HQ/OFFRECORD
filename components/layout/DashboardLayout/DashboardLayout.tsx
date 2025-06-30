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
import styles from './DashboardLayout.module.css';

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
    // Handle sign out logic
    router.push('/users');
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={styles.dashboardlayout}>
      {/* Header */}
      <div className={styles.dashboardlayoutInner}>
        <div className={styles.offRecordParent}>
          <div className={styles.offRecord}>OFF-RECORD</div>
          <div className={styles.frameParent}>
            <div className={styles.signOutParent}>
              <div className={styles.signOut} onClick={handleSignOut}>sign out</div>
              <img 
                className={styles.frameChild} 
                alt="User avatar" 
                src={currentUser.avatar}
              />
            </div>
            <div className={styles.button} onClick={handleCreateContent}>
              <div className={styles.label}>create content</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.frameGroup}>
        <div className={styles.sidebarParent}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.sidemenu}>
              <div className={styles.menu}>menu</div>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <div 
                    key={item.id}
                    className={isActive ? styles.frameDiv : styles.frameContainer}
                    onClick={() => handleMenuClick(item.href)}
                  >
                    <Icon className={styles.frameIcon} />
                    <div className={styles.signOut}>{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Container */}
          <div className={styles.container}>
            <div className={styles.pageHeader}>
              <div className={styles.headerContent}>
                <div className={styles.keepSharingKnowledge}>{title}</div>
                {subtitle && (
                  <div className={styles.subtitle}>{subtitle}</div>
                )}
                {showPagination && (
                  <div className={styles.showing6Of56Parent}>
                    <div className={styles.showing6Of}>
                      showing {startItem}-{endItem} of {totalItems}
                    </div>
                    <div className={styles.paginationControls}>
                      <button 
                        className={styles.paginationButton}
                        disabled={currentPage === 1}
                        onClick={() => {/* Handle previous page */}}
                      >
                        <ChevronLeft className={styles.frameItem} />
                      </button>
                      <button 
                        className={styles.paginationButton}
                        disabled={currentPage === totalPages}
                        onClick={() => {/* Handle next page */}}
                      >
                        <ChevronRight className={styles.frameItem} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className={styles.contentArea}>
              {children}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.buildInOffRecordWrapper}>
          <div className={styles.buildInOff}>© 2025 build in off record -</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
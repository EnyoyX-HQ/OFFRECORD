"use client";

import { FunctionComponent } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './WebSideBar.module.css';

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
    <div className={styles.websidebar}>
      <div className={styles.sidebarContent}>
        {showCategories && (
          <div className={styles.categoriesSection}>
            <div className={styles.designParent}>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={isActiveCategory(category.path) ? styles.engineering : styles.design}
                  onClick={() => handleCategoryClick(category.path)}
                >
                  {category.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {showBecomeMember && (
          <div className={styles.becomeMemberSection}>
            <div className={styles.container}>
              <div className={styles.designParent}>
                <div className={styles.avatarGroup}>
                  <div className={styles.avatarGroup}>
                    <img className={styles.avatarIcon} alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                    <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" />
                    <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" />
                    <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" />
                    <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" />
                    <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face" />
                    <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face" />
                  </div>
                </div>
                <div className={styles.joinACommunity}>join a community of locked-in founders shipping their ideas with ai</div>
              </div>
              <div className={styles.button}>
                <div className={styles.label}>become a member</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebSideBar;
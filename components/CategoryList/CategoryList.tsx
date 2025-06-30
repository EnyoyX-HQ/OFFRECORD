"use client";

import { FunctionComponent } from 'react';
import styles from './CategoryList.module.css';
import CardContent from '../cards/CardContent';

interface CategoryListProps {
  category?: string;
  title?: string;
  description?: string;
}

const CategoryList: FunctionComponent<CategoryListProps> = ({ 
  category = 'engineering',
  title = 'best practices for non technical founders',
  description = 'A curated collection of insights, tools, and best practices for fast forward thinking founders shipping their ideas with AI. Stay ahead of the curve with resources that matter.'
}) => {
  return (
    <div className={styles.categorylist}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.sidebar}>
            <div className={styles.categoriesSection}>
              <div className={styles.designParent}>
                <div className={styles.design}>design</div>
                <div className={styles.engineering}>Engineering</div>
                <div className={styles.design}>goto market</div>
                <div className={styles.design}>compliance</div>
              </div>
            </div>
            <div className={styles.becomeMemberSection}>
              <div className={styles.avatarGroup}>
                <img className={styles.avatarIcon} alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face" />
                <img className={styles.avatarIcon1} alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face" />
              </div>
              <div className={styles.joinACommunity}>Join a community of locked-in founders shipping their ideas with ai</div>
              <div className={styles.button}>
                <div className={styles.label}>become a member</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.bestPracticesForNonTechnicParent}>
            <div className={styles.bestPracticesFor}>{title}</div>
            <div className={styles.aCuratedCollection}>{description}</div>
          </div>
          
          <div className={styles.containerInner}>
            <div className={styles.frameContainer}>
              <div className={styles.curatedForYouWrapper}>
                <div className={styles.curatedForYou}>curated for you</div>
              </div>
              <div className={styles.frameDiv}>
                <CardContent title="Setting up your next js project for scalability" />
                <CardContent title="Deploying a blockchain app using algorand" />
                <CardContent title="Setting up a test & production server for your application" />
              </div>
              <div className={styles.frameDiv}>
                <CardContent title="Building secure authentication systems" />
                <CardContent title="Database optimization strategies" />
                <CardContent title="API design best practices" />
              </div>
            </div>
          </div>
          
          <div className={styles.lastUpdatedOnDec42024Wrapper}>
            <div className={styles.lastUpdatedOn}>Last updated on Dec 4, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
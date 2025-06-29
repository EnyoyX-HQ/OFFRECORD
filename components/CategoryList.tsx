"use client";

import { FunctionComponent } from 'react';
import styles from './CategoryList.module.css';
import CardContent from './cards/CardContent';
import WebSideBar from './layout/WebSideBar';

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
        <WebSideBar showCategories={true} showBecomeMember={true} />
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
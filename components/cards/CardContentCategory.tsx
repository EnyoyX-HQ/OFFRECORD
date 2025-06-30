"use client";

import { FunctionComponent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CardContentCategory.module.css';

interface CardContentCategoryProps {
  title: string;
  description: string;
}

const CardContentCategory: FunctionComponent<CardContentCategoryProps> = ({ title, description }) => {
  const router = useRouter();
  
  const handleClick = () => {
    // Create a slug from the title and navigate to category page
    let slug = title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters first
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, '');   // Remove leading/trailing hyphens
    
    // Handle special cases for routing
    if (slug === 'build-with') {
      slug = 'build-with';
    } else if (slug === 'best-practices') {
      slug = 'best-practices';
    }
    
    router.push(`/users/category/${slug}`);
  };

  return (
    <div className={styles.frameWrapper} onClick={handleClick}>
      <div className={styles.bestPracticesParent}>
        <div className={styles.bestPractices}>{title}</div>
        <div className={styles.ollioIsNot}>{description}</div>
      </div>
    </div>
  );
};

export default CardContentCategory;
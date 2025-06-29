"use client";

import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
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
    let slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    
    // Handle special cases for routing
    if (slug === 'build-with') {
      slug = 'build-with';
    } else if (slug === 'best-practices') {
      slug = 'best-practices';
    }
    
    router.push(`/users/category/${slug}`);
  };

  return (
    <motion.div 
      className={styles.frameWrapper} 
      onClick={handleClick}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={styles.bestPracticesParent}>
        <div className={styles.bestPractices}>{title}</div>
        <div className={styles.ollioIsNot}>{description}</div>
      </div>
    </motion.div>
  );
};

export default CardContentCategory;
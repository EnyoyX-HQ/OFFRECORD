"use client";

import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './CardContent.module.css';

interface CardContentProps {
  title: string;
}

const CardContent: FunctionComponent<CardContentProps> = ({ title }) => {
  const router = useRouter();
  
  const handleClick = () => {
    // Create a slug from the title
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    router.push(`/users/content/${slug}`);
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
      <div className={styles.settingUpYourNextJsProjecWrapper}>
        <div className={styles.settingUpYour}>{title}</div>
      </div>
    </motion.div>
  );
};

export default CardContent;
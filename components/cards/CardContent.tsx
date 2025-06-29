"use client";

import { FunctionComponent } from 'react';
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
    <div className={styles.frameWrapper} onClick={handleClick}>
      <div className={styles.settingUpYourNextJsProjecWrapper}>
        <div className={styles.settingUpYour}>{title}</div>
      </div>
    </div>
  );
};

export default CardContent;
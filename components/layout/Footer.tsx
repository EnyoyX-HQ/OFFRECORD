"use client";

import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer: FunctionComponent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={styles.buildInOffRecordWrapper}
    >
      <div className={styles.buildInOff}>© 2025 build in off record -</div>
    </motion.div>
  );
};

export default Footer;
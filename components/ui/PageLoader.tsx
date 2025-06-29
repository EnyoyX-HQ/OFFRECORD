"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  children: React.ReactNode;
  delay?: number;
}

const PageLoader: React.FC<PageLoaderProps> = ({ children, delay = 100 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Ensure all resources are loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Small delay to ensure smooth transition
      setTimeout(() => setShowContent(true), 50);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <AnimatePresence mode="wait">
      {!showContent ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-xl font-bold uppercase tracking-wider"
          >
            OFF-RECORD
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
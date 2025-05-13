import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 0, 0]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <AcademicCapIcon className="h-16 w-16 text-primary" />
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
        className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-8"
        style={{ maxWidth: 200 }}
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-600 dark:text-gray-400"
      >
        Loading your learning experience...
      </motion.p>
    </div>
  );
}
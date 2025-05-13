import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FireIcon, 
  ClockIcon, 
  AcademicCapIcon, 
  StarIcon 
} from '@heroicons/react/24/outline';

export default function ProgressStats({ userData }) {
  // For the visual animation of stats
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInView(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  // Sample stats (in real app would come from userData)
  const stats = [
    {
      id: 1,
      name: 'Learning Streak',
      value: '7 days',
      icon: FireIcon,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    },
    {
      id: 2,
      name: 'Time Spent',
      value: '12h 30m',
      icon: ClockIcon,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      id: 3,
      name: 'Courses Completed',
      value: '3',
      icon: AcademicCapIcon,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      id: 4,
      name: 'XP Points',
      value: '1,250',
      icon: StarIcon,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.5, 
            delay: stat.id * 0.1,
            ease: "easeOut" 
          }}
          className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`p-3 rounded-full ${stat.bgColor} mr-4`}>
            <stat.icon className={`h-6 w-6 ${stat.color}`} />
          </div>
          
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.name}
            </p>
            <p className="text-xl font-semibold">
              {stat.value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
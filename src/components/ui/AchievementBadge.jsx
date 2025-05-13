import { motion } from 'framer-motion';

export default function AchievementBadge({ badge, size = 'medium' }) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };
  
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center p-1`}
      >
        {/* Colored halo effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 animate-pulse-slow"></div>
        
        {/* Border */}
        <div className="absolute inset-0 rounded-full border-2 border-primary"></div>
        
        {/* Badge icon */}
        <div className={`rounded-full bg-white dark:bg-gray-800 ${sizeClasses[size]} flex items-center justify-center p-2`}>
          <img 
            src={badge.iconUrl} 
            alt={badge.name} 
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
      
      {/* Badge name */}
      <p className="mt-2 text-xs font-medium text-center">
        {badge.name}
      </p>
      
      {/* Level indicator for leveled badges */}
      {badge.level && (
        <div className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {badge.level}
        </div>
      )}
    </div>
  );
}
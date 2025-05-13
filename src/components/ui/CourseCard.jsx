import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default function CourseCard({ course, enrolled = false }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card group"
    >
      <div className="relative overflow-hidden rounded-t-lg -mt-6 -mx-6 mb-4">
        <img 
          src={course.coverImage} 
          alt={course.title}
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Difficulty badge */}
        <div className="absolute top-3 left-3">
          <span className={`badge ${
            course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
            course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
          }`}>
            {course.difficulty}
          </span>
        </div>
        
        {/* Category */}
        <div className="absolute top-3 right-3">
          <span className="badge bg-primary/10 text-primary dark:bg-primary/20">
            {course.category}
          </span>
        </div>
        
        {/* Progress indicator for enrolled courses */}
        {enrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200 dark:bg-gray-700">
            <div 
              className="h-full bg-primary"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
        {course.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {course.description}
      </p>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="ml-1 text-sm font-medium">{course.rating}</span>
          <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({course.reviewsCount})</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
          <ClockIcon className="h-4 w-4 mr-1" />
          {course.duration}
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
          <UserGroupIcon className="h-4 w-4 mr-1" />
          {course.studentsCount}
        </div>
      </div>
      
      {/* Instructor info */}
      <div className="flex items-center mb-4">
        <img 
          src={course.instructor.avatarUrl} 
          alt={course.instructor.name}
          className="h-6 w-6 rounded-full object-cover"
        />
        <span className="ml-2 text-sm">{course.instructor.name}</span>
      </div>
      
      {enrolled ? (
        <Link 
          to={`/courses/${course.id}`} 
          className="btn btn-primary w-full"
        >
          {course.progress === 0 ? 'Start Learning' : 'Continue Learning'}
        </Link>
      ) : (
        <Link 
          to={`/courses/${course.id}`} 
          className="btn btn-primary w-full"
        >
          View Course
        </Link>
      )}
    </motion.div>
  );
}
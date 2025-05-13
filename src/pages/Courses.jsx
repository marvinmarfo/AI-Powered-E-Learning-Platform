import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import CourseCard from '../components/ui/CourseCard';
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample course data - in a real app, this would be fetched from the backend
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const allCourses = [
        {
          id: 1,
          title: "Introduction to Web Development",
          description: "Learn the fundamentals of HTML, CSS, and JavaScript to build your first website.",
          coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Web Development",
          difficulty: "Beginner",
          duration: "8 weeks",
          rating: 4.8,
          reviewsCount: 342,
          studentsCount: "2.5k+",
          instructor: {
            name: "Alex Morgan",
            avatarUrl: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        },
        {
          id: 2,
          title: "Data Science Fundamentals",
          description: "Master the basics of data analysis and visualization using Python and popular libraries.",
          coverImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Data Science",
          difficulty: "Intermediate",
          duration: "10 weeks",
          rating: 4.7,
          reviewsCount: 268,
          studentsCount: "1.8k+",
          instructor: {
            name: "Sarah Chen",
            avatarUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        },
        {
          id: 3,
          title: "Mobile App Development with React Native",
          description: "Build cross-platform mobile applications using React Native and JavaScript.",
          coverImage: "https://images.pexels.com/photos/2451552/pexels-photo-2451552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Mobile Development",
          difficulty: "Advanced",
          duration: "12 weeks",
          rating: 4.9,
          reviewsCount: 189,
          studentsCount: "1.2k+",
          instructor: {
            name: "James Wilson",
            avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        },
        {
          id: 4,
          title: "Advanced JavaScript Concepts",
          description: "Deep dive into advanced JavaScript topics including closures, prototypes, and asynchronous programming.",
          coverImage: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Web Development",
          difficulty: "Advanced",
          duration: "6 weeks",
          rating: 4.9,
          reviewsCount: 423,
          studentsCount: "3.2k+",
          instructor: {
            name: "David Kim",
            avatarUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        },
        {
          id: 5,
          title: "UI/UX Design Principles",
          description: "Learn the fundamentals of user interface and user experience design to create intuitive, user-friendly applications.",
          coverImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Design",
          difficulty: "Intermediate",
          duration: "8 weeks",
          rating: 4.7,
          reviewsCount: 256,
          studentsCount: "1.5k+",
          instructor: {
            name: "Emily Johnson",
            avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        },
        {
          id: 6,
          title: "Machine Learning for Beginners",
          description: "An introduction to machine learning concepts and techniques with practical examples using Python.",
          coverImage: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Data Science",
          difficulty: "Beginner",
          duration: "10 weeks",
          rating: 4.6,
          reviewsCount: 312,
          studentsCount: "2.1k+",
          instructor: {
            name: "Michael Rodriguez",
            avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        },
        {
          id: 7,
          title: "Full Stack Web Development",
          description: "Comprehensive course covering both front-end and back-end technologies for web development.",
          coverImage: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Web Development",
          difficulty: "Intermediate",
          duration: "16 weeks",
          rating: 4.8,
          reviewsCount: 521,
          studentsCount: "4.5k+",
          instructor: {
            name: "Jessica Park",
            avatarUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        },
        {
          id: 8,
          title: "iOS App Development with Swift",
          description: "Learn to build native iOS applications using Swift and Xcode from scratch.",
          coverImage: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Mobile Development",
          difficulty: "Intermediate",
          duration: "14 weeks",
          rating: 4.7,
          reviewsCount: 189,
          studentsCount: "1.3k+",
          instructor: {
            name: "Ryan Chen",
            avatarUrl: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        }
      ];
      
      setCourses(allCourses);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Categories for filter
  const categories = ['All', 'Web Development', 'Data Science', 'Mobile Development', 'Design'];
  
  // Difficulty levels for filter
  const difficultyLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  // Filter courses based on search, category, and level
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesDifficulty = activeLevel === 'All' || course.difficulty === activeLevel;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory('All');
    setActiveLevel('All');
  };
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Course Catalog</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our comprehensive collection of courses designed to help you achieve your learning goals.
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Search bar */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 input"
              />
            </div>
            
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center space-x-2 btn btn-outline"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              <span>Filters</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Desktop filters */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Category filter */}
              <div className="relative inline-block">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="input pr-8 appearance-none"
                >
                  <option disabled>Category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
              
              {/* Level filter */}
              <div className="relative inline-block">
                <select
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                  className="input pr-8 appearance-none"
                >
                  <option disabled>Level</option>
                  {difficultyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
              
              {/* Clear filters */}
              {(activeCategory !== 'All' || activeLevel !== 'All' || searchTerm !== '') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  <XMarkIcon className="h-4 w-4 mr-1" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
          
          {/* Mobile filters (collapsible) */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 md:hidden space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              {/* Category filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full input pr-8 appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
              
              {/* Level filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Difficulty Level
                </label>
                <div className="relative">
                  <select
                    value={activeLevel}
                    onChange={(e) => setActiveLevel(e.target.value)}
                    className="w-full input pr-8 appearance-none"
                  >
                    {difficultyLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
              
              {/* Clear filters */}
              {(activeCategory !== 'All' || activeLevel !== 'All' || searchTerm !== '') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  <XMarkIcon className="h-4 w-4 mr-1" />
                  Clear all filters
                </button>
              )}
            </motion.div>
          )}
        </div>
        
        {/* Filter summary */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-medium">{filteredCourses.length}</span> {filteredCourses.length === 1 ? 'course' : 'courses'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {activeLevel !== 'All' && ` for ${activeLevel} level`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
          
          {/* Sort options (could be expanded) */}
          <div className="relative inline-block">
            <select className="input pr-8 appearance-none text-sm">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
        
        {/* Course grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">No courses found</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria.
            </p>
            <div className="mt-6">
              <button
                onClick={clearFilters}
                className="btn btn-primary"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import ProgressStats from '../components/dashboard/ProgressStats';
import CourseCard from '../components/ui/CourseCard';
import AchievementBadge from '../components/ui/AchievementBadge';
import AITutorChat from '../components/ui/AITutorChat';
import { useAuth } from '../contexts/AuthContext';
import { 
  ArrowRightIcon, 
  AcademicCapIcon,
  CalendarIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const { currentUser, userData } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulated data loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Sample data - in a real app, this would come from the backend
  const enrolledCourses = [
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
      progress: 75,
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
      progress: 30,
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
      progress: 10,
      instructor: {
        name: "James Wilson",
        avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
      }
    }
  ];
  
  const recommendedCourses = [
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
    }
  ];
  
  const userBadges = [
    {
      id: 1,
      name: "Fast Learner",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/2620/2620576.png",
      level: 2
    },
    {
      id: 2,
      name: "Quiz Master",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/3588/3588614.png"
    },
    {
      id: 3,
      name: "Coding Streak",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/1067/1067357.png"
    },
    {
      id: 4,
      name: "Community Helper",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
    }
  ];
  
  // Upcoming deadlines/events
  const upcomingEvents = [
    {
      id: 1,
      title: "CSS Grid Quiz",
      course: "Introduction to Web Development",
      date: "Tomorrow, 3:00 PM",
      type: "quiz"
    },
    {
      id: 2,
      title: "Data Visualization Project",
      course: "Data Science Fundamentals",
      date: "May 15, 11:59 PM",
      type: "assignment"
    },
    {
      id: 3,
      title: "React Native Fundamentals",
      course: "Mobile App Development",
      date: "Live session - May 12, 2:00 PM",
      type: "webinar"
    }
  ];
  
  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </AppLayout>
    );
  }
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome section */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl font-bold">
              Welcome back, {currentUser?.displayName || 'Learner'}! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Track your progress, continue learning, and discover new courses.
            </p>
          </motion.div>
        </div>
        
        {/* Stats cards */}
        <section className="mb-12">
          <ProgressStats userData={userData} />
        </section>
        
        {/* Main dashboard grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* In Progress Courses */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center">
                  <AcademicCapIcon className="h-5 w-5 mr-2" />
                  Your Learning Journey
                </h2>
                <Link to="/courses" className="text-primary hover:underline flex items-center">
                  View all courses
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    enrolled={true} 
                  />
                ))}
              </div>
            </section>
            
            {/* Recommended Courses */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  Recommended for You
                </h2>
                <Link to="/courses" className="text-primary hover:underline flex items-center">
                  Browse more
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedCourses.map((course) => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                  />
                ))}
              </div>
            </section>
          </div>
          
          {/* Right column */}
          <div className="space-y-8">
            {/* Upcoming deadlines */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                  Upcoming Deadlines
                </h3>
                <Link to="/calendar" className="text-sm text-primary hover:underline">
                  View calendar
                </Link>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex space-x-3">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center ${
                      event.type === 'quiz' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' :
                      event.type === 'assignment' ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' :
                      'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                    }`}>
                      {event.type === 'quiz' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      )}
                      {event.type === 'assignment' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      )}
                      {event.type === 'webinar' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{event.course}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Achievements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <ChartBarIcon className="h-5 w-5 mr-2 text-primary" />
                  Your Achievements
                </h3>
                <Link to="/profile/achievements" className="text-sm text-primary hover:underline">
                  View all
                </Link>
              </div>
              
              <div className="flex justify-around flex-wrap">
                {userBadges.map((badge) => (
                  <AchievementBadge key={badge.id} badge={badge} />
                ))}
              </div>
            </section>
            
            {/* Learning Streak */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">7-Day Streak</h3>
              <div className="grid grid-cols-7 gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div key={day} className="flex flex-col items-center">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center mb-1 ${
                      day <= 5 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
                    }`}>
                      {day}
                    </div>
                    <span className="text-xs text-gray-500">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][day-1]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  You've been learning for <span className="font-semibold">5 days</span> in a row!
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Complete today's goal to continue your streak
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* AI Tutor Chat */}
      <AITutorChat />
    </AppLayout>
  );
}
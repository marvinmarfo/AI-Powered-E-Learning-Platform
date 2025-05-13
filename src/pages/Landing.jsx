import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import { useAuth } from '../contexts/AuthContext';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  PuzzlePieceIcon,
  AdjustmentsHorizontalIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Landing() {
  const { currentUser } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Sample course data for featured courses
  const featuredCourses = [
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
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      content: "LearnSphere transformed my learning experience. The AI tutor helped me understand complex concepts that I was struggling with for months!",
      author: "Emily Johnson",
      role: "Software Developer",
      avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      content: "As someone with a learning disability, I've always struggled with traditional education platforms. LearnSphere's inclusive approach and adaptive learning has made all the difference.",
      author: "Michael Rodriguez",
      role: "Graphic Designer",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      content: "The gamification elements make learning addictive in the best way! I'm constantly motivated to keep pushing myself and earn new badges.",
      author: "Sophia Chen",
      role: "Marketing Specialist",
      avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];
  
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center pt-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Learn Without <span className="text-primary">Limits</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                An inclusive e-learning platform with personalized AI tutoring and gamification to make education accessible and engaging for everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {currentUser ? (
                  <Link 
                    to="/dashboard" 
                    className="btn btn-primary text-base px-8 py-3"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <>
                    <Link 
                      to="/signup" 
                      className="btn btn-primary text-base px-8 py-3"
                    >
                      Get Started Free
                    </Link>
                    <Link 
                      to="/signin" 
                      className="btn btn-outline text-base px-8 py-3"
                    >
                      Sign In
                    </Link>
                  </>
                )}
              </div>
              
              <div className="mt-8 flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                    alt="User"
                  />
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                    alt="User"
                  />
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                    alt="User"
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Joined by <span className="font-semibold">10,000+</span> learners
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="E-learning platform interface" 
                  className="w-full"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-secondary opacity-20 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose LearnSphere?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our platform is designed to make education accessible, engaging, and effective for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 rounded-lg p-3 inline-block mb-4">
                <AcademicCapIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Personalized Learning Paths
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Custom learning journeys tailored to your skills, goals, and learning pace to ensure effective progress.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-secondary/10 rounded-lg p-3 inline-block mb-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                AI-Powered Tutor
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get instant help and guidance from our intelligent AI assistant that adapts to your learning style.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-3 inline-block mb-4">
                <PuzzlePieceIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Gamified Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Earn points, badges, and climb leaderboards as you learn, making education fun and motivating.
              </p>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-3 inline-block mb-4">
                <UserGroupIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Inclusive Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Accessible design and multiple learning formats to accommodate different abilities and learning preferences.
              </p>
            </motion.div>
            
            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-3 inline-block mb-4">
                <AdjustmentsHorizontalIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Adaptive Assessments
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Smart quizzes and assignments that adjust to your performance to identify and reinforce areas of improvement.
              </p>
            </motion.div>
            
            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-lg p-3 inline-block mb-4">
                <LightBulbIcon className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Interactive Content
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engaging videos, simulations, and interactive exercises that make complex concepts easy to understand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How LearnSphere Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our proven approach to effective, inclusive, and enjoyable online learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm relative z-10">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Create Your Profile
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Sign up and complete a brief assessment to help us understand your goals, learning style, and current skill level.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm">Personalized onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm">Initial skill assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm">Learning preferences</span>
                  </li>
                </ul>
              </div>
              
              {/* Mobile connector */}
              <div className="md:hidden h-10 w-1 bg-primary mx-auto my-2"></div>
              
              {/* Desktop connector */}
              <div className="hidden md:block absolute top-1/2 right-0 h-1 w-full md:w-16 bg-primary -mr-4"></div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm relative z-10">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Follow Your Learning Path
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Access your customized course recommendations and progress through interactive content with AI-assisted guidance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm">Tailored course roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm">AI tutor assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm">Progress tracking</span>
                  </li>
                </ul>
              </div>
              
              {/* Mobile connector */}
              <div className="md:hidden h-10 w-1 bg-primary mx-auto my-2"></div>
              
              {/* Desktop connector */}
              <div className="hidden md:block absolute top-1/2 right-0 h-1 w-full md:w-16 bg-primary -mr-4"></div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm relative z-10">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Earn Recognition
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Complete courses, earn certificates, collect badges, and showcase your achievements on your learner profile.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm">Digital certificates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm">Achievement badges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-sm">Skills portfolio</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore our most popular courses taught by industry experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                
                {currentUser ? (
                  <Link to={`/courses/${course.id}`} className="btn btn-primary w-full">
                    View Course
                  </Link>
                ) : (
                  <Link to="/signup" className="btn btn-primary w-full">
                    Sign Up to Access
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to={currentUser ? "/courses" : "/signup"} 
              className="btn btn-outline"
            >
              {currentUser ? "Browse All Courses" : "Sign Up to Browse All Courses"}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Learners Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover how LearnSphere has transformed the learning experience for our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm relative"
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-5xl leading-none text-primary opacity-20">
                  "
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join thousands of learners today and unlock your full potential with LearnSphere's inclusive learning platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {currentUser ? (
                <Link 
                  to="/dashboard" 
                  className="btn bg-white text-primary hover:bg-white/90 text-base px-8 py-3"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link 
                    to="/signup" 
                    className="btn bg-white text-primary hover:bg-white/90 text-base px-8 py-3"
                  >
                    Create Free Account
                  </Link>
                  <Link 
                    to="/signin" 
                    className="btn border border-white bg-transparent hover:bg-white/10 text-base px-8 py-3"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </AppLayout>
  );
}
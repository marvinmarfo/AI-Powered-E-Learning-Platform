import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import AppLayout from '../components/layout/AppLayout';
import AITutorChat from '../components/ui/AITutorChat';
import { 
  StarIcon, 
  ClockIcon, 
  UserGroupIcon,
  BookOpenIcon,
  CheckIcon,
  PuzzlePieceIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  PlayIcon,
  ArrowRightIcon,
  LockClosedIcon,
  LockOpenIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  
  // Fetch course data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // This would be a real API call in production
      const mockCourse = {
        id: parseInt(courseId),
        title: "Introduction to Web Development",
        description: "Learn the fundamentals of HTML, CSS, and JavaScript to build your first website. This comprehensive course takes you from zero to hero in web development, covering everything from basic page structure to advanced interactive features and responsive design.",
        longDescription: `This hands-on course is designed for complete beginners who want to learn how to build modern, responsive websites from scratch. 

You'll start with the basics of HTML to structure your content, then move on to CSS to style your pages and make them look professional. Finally, you'll add interactivity with JavaScript, the programming language of the web.

By the end of this course, you'll have built several real-world projects, including a personal portfolio website that you can use to showcase your skills to potential employers or clients.`,
        coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "Web Development",
        difficulty: "Beginner",
        duration: "8 weeks",
        totalHours: 42,
        rating: 4.8,
        reviewsCount: 342,
        studentsCount: "2.5k+",
        lastUpdated: "March 2025",
        language: "English",
        price: "$49.99",
        progress: 15,
        instructor: {
          name: "Alex Morgan",
          title: "Senior Web Developer",
          bio: "Alex has over 10 years of experience in web development and has worked with companies like Google and Facebook. He's passionate about teaching and making complex concepts accessible to beginners.",
          avatarUrl: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1600",
          coursesCount: 12,
          studentsCount: "15k+",
          rating: 4.9
        },
        whatYouWillLearn: [
          "Build websites using HTML, CSS, and JavaScript from scratch",
          "Understand web development fundamentals and best practices",
          "Create responsive layouts that work on all devices",
          "Implement interactive features using JavaScript",
          "Deploy websites to the internet for others to see",
          "Use modern development tools and workflows"
        ],
        prerequisites: [
          "Basic computer skills",
          "No prior programming experience required",
          "A computer with internet access"
        ],
        sections: [
          {
            id: 1,
            title: "Getting Started with HTML",
            lectures: [
              {
                id: 1,
                title: "Introduction to Web Development",
                type: "video",
                duration: "15:30",
                isCompleted: true,
                isFree: true
              },
              {
                id: 2,
                title: "Setting Up Your Development Environment",
                type: "video",
                duration: "12:45",
                isCompleted: true,
                isFree: true
              },
              {
                id: 3,
                title: "HTML Document Structure",
                type: "video",
                duration: "18:20",
                isCompleted: false,
                isFree: false
              },
              {
                id: 4,
                title: "Working with Text Elements",
                type: "video",
                duration: "20:15",
                isCompleted: false,
                isFree: false
              },
              {
                id: 5,
                title: "HTML Practice Quiz",
                type: "quiz",
                duration: "10:00",
                isCompleted: false,
                isFree: false
              }
            ]
          },
          {
            id: 2,
            title: "Styling with CSS",
            lectures: [
              {
                id: 6,
                title: "Introduction to CSS",
                type: "video",
                duration: "22:10",
                isCompleted: false,
                isFree: false
              },
              {
                id: 7,
                title: "Selectors and Properties",
                type: "video",
                duration: "25:40",
                isCompleted: false,
                isFree: false
              },
              {
                id: 8,
                title: "The Box Model",
                type: "video",
                duration: "18:55",
                isCompleted: false,
                isFree: false
              },
              {
                id: 9,
                title: "Flexbox and Grid Layout",
                type: "video",
                duration: "30:25",
                isCompleted: false,
                isFree: false
              },
              {
                id: 10,
                title: "Responsive Design",
                type: "video",
                duration: "28:15",
                isCompleted: false,
                isFree: false
              },
              {
                id: 11,
                title: "CSS Assignment: Build a Landing Page",
                type: "assignment",
                duration: "60:00",
                isCompleted: false,
                isFree: false
              }
            ]
          },
          {
            id: 3,
            title: "JavaScript Fundamentals",
            lectures: [
              {
                id: 12,
                title: "Introduction to JavaScript",
                type: "video",
                duration: "20:30",
                isCompleted: false,
                isFree: false
              },
              {
                id: 13,
                title: "Variables and Data Types",
                type: "video",
                duration: "22:45",
                isCompleted: false,
                isFree: false
              },
              {
                id: 14,
                title: "Control Flow: Conditionals and Loops",
                type: "video",
                duration: "25:50",
                isCompleted: false,
                isFree: false
              },
              {
                id: 15,
                title: "Functions and Scope",
                type: "video",
                duration: "28:15",
                isCompleted: false,
                isFree: false
              },
              {
                id: 16,
                title: "Working with the DOM",
                type: "video",
                duration: "32:20",
                isCompleted: false,
                isFree: false
              },
              {
                id: 17,
                title: "Event Handling",
                type: "video",
                duration: "24:40",
                isCompleted: false,
                isFree: false
              },
              {
                id: 18,
                title: "JavaScript Mid-Course Quiz",
                type: "quiz",
                duration: "15:00",
                isCompleted: false,
                isFree: false
              }
            ]
          },
          {
            id: 4,
            title: "Building Interactive Web Projects",
            lectures: [
              {
                id: 19,
                title: "Project Planning and Structure",
                type: "video",
                duration: "18:30",
                isCompleted: false,
                isFree: false
              },
              {
                id: 20,
                title: "Creating a Todo List App",
                type: "video",
                duration: "35:45",
                isCompleted: false,
                isFree: false
              },
              {
                id: 21,
                title: "Building a Weather App",
                type: "video",
                duration: "40:20",
                isCompleted: false,
                isFree: false
              },
              {
                id: 22,
                title: "Personal Portfolio Website",
                type: "video",
                duration: "45:15",
                isCompleted: false,
                isFree: false
              },
              {
                id: 23,
                title: "Deploying Your Website",
                type: "video",
                duration: "22:30",
                isCompleted: false,
                isFree: false
              },
              {
                id: 24,
                title: "Final Project Submission",
                type: "assignment",
                duration: "120:00",
                isCompleted: false,
                isFree: false
              }
            ]
          }
        ],
        reviews: [
          {
            id: 1,
            name: "Sarah Johnson",
            date: "2 weeks ago",
            rating: 5,
            comment: "This course was exactly what I needed to start my web development journey. Alex explains everything in a way that's easy to understand, and the projects helped solidify my knowledge. Highly recommend!",
            avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
          },
          {
            id: 2,
            name: "Michael Chen",
            date: "1 month ago",
            rating: 4,
            comment: "Great introduction to web development. The content is well-structured and the instructor's explanations are clear. I would have liked more advanced JavaScript concepts, but overall it's an excellent course for beginners.",
            avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          },
          {
            id: 3,
            name: "Jessica Miller",
            date: "2 months ago",
            rating: 5,
            comment: "As someone with no prior programming experience, I was worried this would be too difficult, but the instructor breaks everything down so well. I'm now able to build my own websites from scratch! The AI tutor feature was also incredibly helpful whenever I got stuck.",
            avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
        ]
      };
      
      setCourse(mockCourse);
      setIsLoading(false);
      
      // Check if user is enrolled (would be from real auth context in production)
      setIsEnrolled(true);
    }, 1000);
  }, [courseId]);
  
  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </AppLayout>
    );
  }
  
  if (!course) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">Course not found</h1>
          <p className="mt-4">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses" className="mt-8 inline-block btn btn-primary">
            Browse Courses
          </Link>
        </div>
      </AppLayout>
    );
  }
  
  // Calculate course stats
  const totalLectures = course.sections.reduce((acc, section) => acc + section.lectures.length, 0);
  const completedLectures = course.sections.reduce((acc, section) => {
    return acc + section.lectures.filter(lecture => lecture.isCompleted).length;
  }, 0);
  const progressPercentage = Math.round((completedLectures / totalLectures) * 100);
  
  return (
    <AppLayout>
      {/* Course header */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Course info */}
            <div className="lg:w-2/3 lg:pr-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIconSolid
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(course.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    {course.rating} ({course.reviewsCount} reviews)
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <UserGroupIcon className="h-5 w-5 mr-1" />
                  <span>{course.studentsCount} students</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <ClockIcon className="h-5 w-5 mr-1" />
                  <span>{course.totalHours} hours</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <BookOpenIcon className="h-5 w-5 mr-1" />
                  <span>{totalLectures} lectures</span>
                </div>
                
                <div className="flex items-center">
                  <span className={`badge ${
                    course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                    course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                  }`}>
                    {course.difficulty}
                  </span>
                </div>
                
                <div>
                  <span className="badge bg-primary/10 text-primary dark:bg-primary/20">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                <img 
                  src={course.instructor.avatarUrl} 
                  alt={course.instructor.name}
                  className="h-12 w-12 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{course.instructor.title}</p>
                </div>
              </div>
              
              {isEnrolled ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-medium">
                      Your progress: {progressPercentage}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {completedLectures}/{totalLectures} lessons completed
                    </div>
                  </div>
                  
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Link 
                      to={`/courses/${course.id}/learn`} 
                      className="btn btn-primary"
                    >
                      {progressPercentage > 0 ? 'Continue Learning' : 'Start Learning'}
                    </Link>
                    
                    <button className="btn btn-outline">
                      View Syllabus
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{course.price}</span>
                    <span className="ml-2 text-lg text-gray-500 line-through">$99.99</span>
                    <span className="ml-2 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-0.5 rounded">
                      50% off
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn btn-primary">
                      Enroll Now
                    </button>
                    
                    <button className="btn btn-outline flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Add to Wishlist
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    30-Day Money-Back Guarantee
                  </p>
                </div>
              )}
            </div>
            
            {/* Course preview */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={course.coverImage} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="bg-white rounded-full p-3 text-gray-800 hover:bg-gray-100 transition-colors">
                    <PlayIcon className="h-8 w-8" />
                  </button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">This course includes:</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <VideoCameraIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                    <span>{course.totalHours} hours of on-demand video</span>
                  </li>
                  <li className="flex items-start">
                    <DocumentTextIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                    <span>25 downloadable resources</span>
                  </li>
                  <li className="flex items-start">
                    <PuzzlePieceIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                    <span>10 coding exercises</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  Share this course
                </button>
                <div className="flex justify-center mt-3 space-x-4">
                  <button className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course content tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tab.Group>
          <Tab.List className="flex flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700">
            <Tab className={({ selected }) => classNames(
              'inline-block py-4 px-4 text-sm font-medium focus:outline-none',
              selected 
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            )}>
              Overview
            </Tab>
            <Tab className={({ selected }) => classNames(
              'inline-block py-4 px-4 text-sm font-medium focus:outline-none',
              selected 
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            )}>
              Curriculum
            </Tab>
            <Tab className={({ selected }) => classNames(
              'inline-block py-4 px-4 text-sm font-medium focus:outline-none',
              selected 
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            )}>
              Instructor
            </Tab>
            <Tab className={({ selected }) => classNames(
              'inline-block py-4 px-4 text-sm font-medium focus:outline-none',
              selected 
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            )}>
              Reviews
            </Tab>
          </Tab.List>
          
          <Tab.Panels className="mt-6">
            {/* Overview panel */}
            <Tab.Panel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* About this course */}
                  <section>
                    <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p>{course.longDescription}</p>
                    </div>
                  </section>
                  
                  {/* What you'll learn */}
                  <section>
                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex">
                          <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                  
                  {/* Prerequisites */}
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                    <ul className="space-y-2">
                      {course.prerequisites.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
                
                <div>
                  {/* Additional info */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Course Details</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Language:</span>
                        <span className="font-medium">{course.language}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Last updated:</span>
                        <span className="font-medium">{course.lastUpdated}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Total videos:</span>
                        <span className="font-medium">{totalLectures} lectures</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Skill level:</span>
                        <span className="font-medium">{course.difficulty}</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-medium mb-4">This Course Is For:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Complete beginners with no prior experience</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Anyone interested in learning web development</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Students looking to build their own websites</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            
            {/* Curriculum panel */}
            <Tab.Panel>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Course Content</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {course.sections.length} sections • {totalLectures} lectures • {course.totalHours} total hours
                    </p>
                  </div>
                  
                  <button className="text-primary hover:underline text-sm font-medium">
                    Expand All Sections
                  </button>
                </div>
                
                {/* Course sections accordion */}
                <div className="space-y-3">
                  {course.sections.map((section) => (
                    <div key={section.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg font-medium">
                          {section.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <span>{section.lectures.length} lectures</span>
                          <ChevronDownIcon className="h-5 w-5 ml-2" />
                        </div>
                      </div>
                      
                      <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {section.lectures.map((lecture) => (
                          <div 
                            key={lecture.id} 
                            className={`px-6 py-4 flex justify-between items-center ${
                              isEnrolled || lecture.isFree ? 'hover:bg-gray-50 dark:hover:bg-gray-800' : ''
                            }`}
                          >
                            <div className="flex items-start">
                              <div className="mr-3 mt-0.5">
                                {lecture.type === 'video' && <PlayIcon className="h-5 w-5 text-gray-500" />}
                                {lecture.type === 'quiz' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                  </svg>
                                )}
                                {lecture.type === 'assignment' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                )}
                              </div>
                              <div>
                                <h4 className={`font-medium ${lecture.isCompleted ? 'line-through text-gray-500 dark:text-gray-500' : ''}`}>
                                  {lecture.title}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {lecture.type.charAt(0).toUpperCase() + lecture.type.slice(1)} • {lecture.duration}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center">
                              {lecture.isFree && !isEnrolled && (
                                <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-0.5 rounded mr-2">
                                  Preview
                                </span>
                              )}
                              
                              {isEnrolled || lecture.isFree ? (
                                <button 
                                  className="text-primary hover:text-primary/80"
                                  title={lecture.isCompleted ? 'Completed' : 'Start'}
                                >
                                  {lecture.isCompleted ? (
                                    <CheckIcon className="h-5 w-5" />
                                  ) : (
                                    <ArrowRightIcon className="h-5 w-5" />
                                  )}
                                </button>
                              ) : (
                                <LockClosedIcon className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab.Panel>
            
            {/* Instructor panel */}
            <Tab.Panel>
              <div className="max-w-3xl">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img 
                      src={course.instructor.avatarUrl} 
                      alt={course.instructor.name}
                      className="h-32 w-32 rounded-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold">{course.instructor.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{course.instructor.title}</p>
                    
                    <div className="flex items-center mt-2 space-x-4">
                      <div className="flex items-center">
                        <StarIconSolid className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1">{course.instructor.rating} Instructor Rating</span>
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="h-5 w-5 text-gray-500" />
                        <span className="ml-1">{course.instructor.studentsCount} Students</span>
                      </div>
                      <div className="flex items-center">
                        <PlayIcon className="h-5 w-5 text-gray-500" />
                        <span className="ml-1">{course.instructor.coursesCount} Courses</span>
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      {course.instructor.bio}
                    </p>
                    
                    <div className="mt-4">
                      <a 
                        href="#" 
                        className="text-primary hover:underline font-medium flex items-center"
                      >
                        View all courses by {course.instructor.name}
                        <ArrowRightIcon className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            
            {/* Reviews panel */}
            <Tab.Panel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                  
                  <div className="space-y-6">
                    {course.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                        <div className="flex items-start">
                          <img 
                            src={review.avatarUrl} 
                            alt={review.name}
                            className="h-10 w-10 rounded-full object-cover mr-4"
                          />
                          
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">{review.name}</h3>
                              <span className="mx-2 text-gray-500">•</span>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            
                            <div className="flex mt-1 mb-3">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <StarIconSolid
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating
                                      ? 'text-yellow-400'
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300">
                              {review.comment}
                            </p>
                            
                            <div className="mt-3 flex items-center">
                              <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mr-4">
                                Helpful?
                              </button>
                              <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                                Report
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <button className="btn btn-outline">
                      Load More Reviews
                    </button>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Rating Overview</h3>
                    
                    <div className="flex items-center mb-4">
                      <div className="text-3xl font-bold mr-2">{course.rating}</div>
                      <div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarIconSolid
                              key={star}
                              className={`h-5 w-5 ${
                                star <= Math.floor(course.rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">
                          Course Rating
                        </p>
                      </div>
                    </div>
                    
                    {/* Rating bars */}
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <div className="flex items-center w-10">
                            <span>{rating}</span>
                            <StarIcon className="h-4 w-4 ml-1 text-gray-400" />
                          </div>
                          <div className="w-full h-2 mx-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-400"
                              style={{ 
                                width: `${rating === 5 ? '70' : rating === 4 ? '20' : rating === 3 ? '7' : rating === 2 ? '2' : '1'}%` 
                              }}
                            ></div>
                          </div>
                          <div className="w-8 text-right text-sm text-gray-500">
                            {rating === 5 ? '70' : rating === 4 ? '20' : rating === 3 ? '7' : rating === 2 ? '2' : '1'}%
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Leave a review */}
                    {isEnrolled && (
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium mb-2">Leave a Review</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Share your experience with this course
                        </p>
                        <button className="btn btn-outline w-full">
                          Write a Review
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      
      {/* AI Tutor */}
      <AITutorChat courseContext={course} />
    </AppLayout>
  );
}
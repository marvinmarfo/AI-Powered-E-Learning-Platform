import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { 
  SunIcon, 
  MoonIcon, 
  Bars3Icon, 
  XMarkIcon, 
  UserCircleIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const { currentUser, signout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    try {
      await signout();
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen || currentUser ? 
        'bg-white bg-opacity-90 backdrop-blur-sm shadow-sm dark:bg-gray-900 dark:bg-opacity-90' : 
        'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center space-x-2">
            <AcademicCapIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">
              LearnSphere
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
              Home
            </Link>
            
            {currentUser ? (
              <>
                <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
                  Dashboard
                </Link>
                <Link to="/courses" className={`nav-link ${location.pathname.includes('/courses') ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
                  Courses
                </Link>
                <Link to="/learning-path" className={`nav-link ${location.pathname === '/learning-path' ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
                  Learning Path
                </Link>
              </>
            ) : (
              <>
                <a href="#features" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  How It Works
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Testimonials
                </a>
              </>
            )}
          </div>
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme toggler */}
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-1.5 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            
            {/* Auth buttons or user menu */}
            {currentUser ? (
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2">
                  <UserCircleIcon className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                  <span className="text-sm font-medium">Profile</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/signin" className="btn btn-outline">
                  Sign In
                </Link>
                <Link to="/signup" className="btn btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-gray-200 dark:border-gray-800"
        >
          <div className="px-4 py-3 space-y-3">
            <Link to="/" className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              Home
            </Link>
            
            {currentUser ? (
              <>
                <Link to="/dashboard" className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  Dashboard
                </Link>
                <Link to="/courses" className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  Courses
                </Link>
                <Link to="/learning-path" className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  Learning Path
                </Link>
                <Link to="/profile" className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <a href="#features" className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  Features
                </a>
                <a href="#how-it-works" className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  How It Works
                </a>
                <a href="#testimonials" className="block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  Testimonials
                </a>
                <div className="pt-4 space-y-2">
                  <Link to="/signin" className="block w-full py-2 text-center border border-gray-300 rounded-md dark:border-gray-700">
                    Sign In
                  </Link>
                  <Link to="/signup" className="block w-full py-2 text-center bg-primary text-white rounded-md">
                    Sign Up
                  </Link>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
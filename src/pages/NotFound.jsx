import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';

export default function NotFound() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Link 
              to="/" 
              className="btn btn-primary"
            >
              Return to Home
            </Link>
            
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Link 
                to="/courses" 
                className="text-primary hover:underline"
              >
                Browse Courses
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                to="/support" 
                className="text-primary hover:underline"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
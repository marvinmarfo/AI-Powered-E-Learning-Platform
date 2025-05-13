import React from 'react'
import { motion } from 'framer-motion'

function LearningPath() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-6">Learning Path</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Your personalized learning journey will appear here.</p>
      </div>
    </motion.div>
  )
}

export default LearningPath
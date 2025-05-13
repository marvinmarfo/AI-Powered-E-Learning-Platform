import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

function Profile() {
  const { currentUser } = useAuth()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p>{currentUser?.email}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Profile
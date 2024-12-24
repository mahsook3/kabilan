"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  const educationData = [
    {
      "Degree": "Bachelor of Engineering",
      "FieldOfStudy": "Mechanical Engineering",
      "Institution": "Sri Eshwar College of Engineering",
      "Location": "Coimbatore, India",
      "Duration": "2021 - 2025",
      "Logo": "/placeholder.svg?height=64&width=64"
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Education</h2>
      {educationData.map((education, index) => (
        <motion.div 
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-12 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="px-6 py-8">
            <div className="flex items-start mb-4">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + 0.2 }}
                className="mr-4 flex-shrink-0"
              >
                <image
                  src={education.Logo}
                  alt={`${education.Institution} logo`}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </motion.div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{education.Degree}</h3>
                    <p className="text-lg text-gray-600">{education.FieldOfStudy}</p>
                    <p className="text-md text-gray-500">{education.Institution}</p>
                    <p className="text-sm text-gray-500">{education.Location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{education.Duration}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}


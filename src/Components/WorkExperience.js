"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function WorkExperience() {
  const workExperiences = [
    {
      "Position": "Project Management Intern",
      "Company": "BMW Group India Pvt. Ltd",
      "Duration": "Aug 2024 - Present",
      "Logo": "/placeholder.svg?height=64&width=64",
      "Responsibilities": [
        "Reduced single-sourced suppliers by 27%, optimizing procurement processes and improving competitive pricing strategies resulting in enhanced KPIs.",
        "Created a supplier pool and identified potential suppliers for various commodities, ensuring capability and reliability.",
        "Developed a comprehensive database of service providers."
      ]
    },
    {
      "Position": "Project Intern",
      "Company": "CAD Solutions",
      "Duration": "Jan - Feb 2024",
      "Logo": "/placeholder.svg?height=64&width=64",
      "Responsibilities": [
        "Developed an aerofoil-shaped fan, designed using Siemens NX.",
        "By simulation, it was found that this design results in better noise reduction and improved airflow."
      ]
    },
    {
      "Position": "Intern",
      "Company": "Universal Heat Exchangers Pvt Ltd",
      "Duration": "Jun - Aug 2023",
      "Logo": "/placeholder.svg?height=64&width=64",
      "Responsibilities": [
        "Analyzed work orders to create production plans, resulting in a 15% increase in production efficiency.",
        "Collaborated with the production team to ensure seamless execution of production cycles, contributing to an annual cost saving of ₹41,000 ($500)."
      ]
    },
    {
      "Position": "Engineering Intern",
      "Company": "Unicast Alloys Pvt Ltd",
      "Duration": "Feb - Apr 2023",
      "Logo": "/placeholder.svg?height=64&width=64",
      "Responsibilities": [
        "Conducted quality control inspections for critical components such as wheel hubs (AL140 and AL90) for Ashok Leyland vehicles and pressure plates for Valeo, achieving a precision rate of 98.7%.",
        "Utilized CMM machine to ensure dimensional accuracy of critical components, achieving a 98.9% measurement accuracy rate."
      ]
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Work Experience</h2>
      {workExperiences.map((experience, index) => (
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
                  src={experience.Logo}
                  alt={`${experience.Company} logo`}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </motion.div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{experience.Position}</h3>
                    <p className="text-lg text-gray-600">{experience.Company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{experience.Duration}</span>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              {experience.Responsibilities.map((responsibility, respIndex) => (
                <motion.li 
                  key={respIndex}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (respIndex * 0.05) + 0.3 }}
                  className="text-gray-700"
                >
                  {responsibility}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}


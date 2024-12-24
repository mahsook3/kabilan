"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function SkillsAndExpertise() {
  const skillsData = [
    {
      "Category": "CAD Software",
      "Skills": [
        "SolidWorks",
        "Siemens NX",
        "Fusion 360",
        "PTC Creo",
        "AutoCAD",
        "Blender"
      ]
    },
    {
      "Category": "ERP Systems",
      "Skills": [
        "SAP"
      ]
    },
    {
      "Category": "Domain Knowledge",
      "Skills": [
        "Knowledge of automotive materials and manufacturing processes",
        "Geometric Dimensioning and Tolerancing",
        "Automotive electronics"
      ]
    },
    {
      "Category": "Manufacturing & Quality",
      "Skills": [
        "3D Printing",
        "CNC Operation",
        "Quality Control"
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
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Skills and Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="px-6 py-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.Category}</h3>
              <ul className="space-y-2">
                {category.Skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


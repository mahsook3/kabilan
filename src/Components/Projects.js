"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  const projectsData = [
    {
      "Title": "All Terrain Vehicle",
      "Date": "Nov 2021",
      "Description": "Designed and fabricated a versatile All Terrain Vehicle adhering to competition standards outlined in the rulebook.",
      "ToolsAndTechnologies": [
        "SolidWorks for design and modeling",
        "Ansys for analysis"
      ],
      "Achievements": [
        "Fabrication completed in 6 months",
        "6th place in MEGA ATV CHAMPIONSHIP-2022, Goa"
      ]
    },
    {
      "Title": "Square and Cylinder Cyclone Separator",
      "Date": "May 2022",
      "Description": "Designed and fabricated a Square and Cylinder Cyclone Separator to achieve more efficiency in particle collection for industries.",
      "KeyFeatures": [
        "Integration of a variable frequency drive (VFD) for controlling blower frequency",
        "Widely applicable in industries such as metalworking, woodworking, and cement manufacturing"
      ]
    },
    {
      "Title": "Automated Guided Vehicle (AGV)",
      "Date": "Jan 2023",
      "Description": "Developed an AGV project using Arduino with ultra-sonic sensors for obstacle avoidance and IR sensors for line following.",
      "Applications": [
        "Material handling automation in warehouses like Amazon"
      ],
      "Achievements": [
        "Published a research journal indexed in Scopus"
      ]
    },
    {
      "Title": "3D Printed Insole for Flat Feet People",
      "Date": "Sep 2023",
      "Description": "Developed customized 3D-printed insoles tailored to individual foot profiles using advanced surface modeling techniques.",
      "KeyFeatures": [
        "Utilized PLA material for 3D printing",
        "Implemented rigorous quality assurance for accuracy and durability"
      ],
      "Goal": "To revolutionize footwear comfort with personalized solutions"
    },
    {
      "Title": "Aerodynamic Fan Design with Aerofoil-shaped Blades",
      "Date": "Jan 2024",
      "Description": "Designed a fan with an aerofoil shape to improve airflow dynamics and noise reduction using Siemens NX.",
      "KeySkills": [
        "Fluid mechanics",
        "Aerodynamics",
        "CAD modeling"
      ],
      "Goal": "To enhance energy efficiency and user experience in various applications"
    },
    {
      "Title": "Design and Development of Gesture Controlled Robotic Arm",
      "Date": "Feb 2024",
      "Description": "Designed a gesture-controlled robotic arm using OpenCV and Python, with parts crafted in SolidWorks.",
      "Applications": [
        "Industrial tasks involving hazardous chemicals"
      ],
      "KeyFeatures": [
        "Servo motors providing multiple degrees of freedom",
        "Capable of handling significant load capacities"
      ]
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="px-6 py-8 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.Title}</h3>
                <span className="text-sm text-gray-500">{project.Date}</span>
              </div>
              <p className="text-gray-600 mb-4">{project.Description}</p>
              {project.ToolsAndTechnologies && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Tools and Technologies</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.ToolsAndTechnologies.map((tool, toolIndex) => (
                      <li key={toolIndex} className="text-gray-600">{tool}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.KeyFeatures && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.KeyFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.Applications && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Applications</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.Applications.map((application, appIndex) => (
                      <li key={appIndex} className="text-gray-600">{application}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.KeySkills && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Skills</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.KeySkills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600">{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.Achievements && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Achievements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.Achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-600">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.Goal && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Goal</h4>
                  <p className="text-gray-600">{project.Goal}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


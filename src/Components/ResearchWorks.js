import React from 'react'
import { motion } from 'framer-motion'

export default function ResearchWorks() {
  const researchData = {
    "ORCID": "0009-0001-5701-7482",
    "Publications": [
      {
        "Title": "A Machine Learning Approach for Design and Control of Automated Guided Vehicle System - A Critical Review",
        "Conference": "ICETMSST 2023",
        "Institution": "Sri Eshwar College of Engineering, Coimbatore",
        "Date": "Apr 2023",
        "Publisher": "Scopus Index",
        "Link": "View"
      },
      {
        "Title": "Exploring the Benefits of Integrating Machine Learning and Tool Condition Monitoring for Manufacturing Applications",
        "Conference": "ICIITB 2024",
        "Institution": "Modern College of Business & Science, Oman",
        "Date": "Apr 2024",
        "Publisher": "Springer Nature",
        "Link": "View"
      }
    ]
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Research Works</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">ORCID</h3>
        <p className="text-lg text-blue-600 hover:text-blue-800">
          <a href={`https://orcid.org/${researchData.ORCID}`} target="_blank" rel="noopener noreferrer">
            {researchData.ORCID}
          </a>
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Publications</h3>
        <div className="space-y-8">
          {researchData.Publications.map((publication, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{publication.Title}</h4>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Conference:</span> {publication.Conference}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Institution:</span> {publication.Institution}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Date:</span> {publication.Date}</p>
              <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Publisher:</span> {publication.Publisher}</p>
              <a 
                href="#" 
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {publication.Link}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}


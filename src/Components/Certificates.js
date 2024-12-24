"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function CertificatesAchievementsMemberships() {
  const certificatesData = [
    {
      "Title": "Certified SOLIDWORKS Associate (CSWA)",
      "Issuer": "SolidWorks Corp., Dassault Systèmes",
      "Date": "Jun 2023",
      "Verification": "Verify"
    },
    {
      "Title": "Dimensioning and Tolerancing Overview",
      "Issuer": "The American Society of Mechanical Engineers (ASME)",
      "Date": "Mar 2024",
      "Verification": "Verify"
    },
    {
      "Title": "Introduction to Self-Driving Cars",
      "Issuer": "University of Toronto, Canada",
      "Date": "Jun 2024",
      "Verification": "Verify"
    },
    {
      "Title": "Basics of Automobile",
      "Issuer": "Automotive Skills Development Council (ASDC)",
      "Date": "Aug 2022",
      "Verification": "Verify"
    },
    {
      "Title": "Automotive Industrial Engineering",
      "Issuer": "Starweaver",
      "Date": "Jun 2024",
      "Verification": "Verify"
    },
    {
      "Title": "Batteries and Electric Vehicles",
      "Issuer": "Arizona State University",
      "Date": "Jun 2024",
      "Verification": "Verify"
    },
    {
      "Title": "MATLAB Onramp",
      "Issuer": "MATLAB Coding",
      "Date": "Jun 2024",
      "Verification": "Verify"
    },
    {
      "Title": "People, Technology and the Future of Mobility - HONORS",
      "Issuer": "University of Michigan",
      "Date": "Jun 2024",
      "Verification": "Verify"
    },
    {
      "Title": "Introduction to Mechanical Engineering Design and Manufacturing with Fusion 360",
      "Issuer": "Autodesk",
      "Date": "Jun 2024",
      "Verification": "Verify"
    },
    {
      "Title": "Simulation Analysis for Mechanical Engineers with Autodesk Fusion 360",
      "Issuer": "Autodesk",
      "Date": "Jun 2024",
      "Verification": "Verify"
    },
    {
      "Title": "Self-Charged Hybrid Electric Vehicle",
      "Issuer": "Toyota Motor Corporation - ASDC",
      "Date": "Jun 2024",
      "Verification": "Verify"
    }
  ]

  const achievementsData = [
    {
      "Title": "Hackheist 2023 Winner",
      "Issuer": "Sri Ramakrishna Engineering College, Coimbatore",
      "Date": "Mar 2023",
      "Description": "Won 1st prize and a cash prize of ₹10,000 ($120) in the national-level hackathon with the project Cyclone Separator."
    },
    {
      "Title": "MEGA ATV Championship 2022",
      "Issuer": "Autosports India",
      "Date": "May 2022",
      "Description": "Achieved 6th place in the national-level MEGA ATV Championship 2022 held in Goa with the project ATV."
    },
    {
      "Title": "ELITZ 2K22",
      "Issuer": "Karpagam Institute of Technology",
      "Date": "Nov 2022",
      "Description": "Awarded 3rd prize in the national-level eVehicle contest for an innovative eCycle design, showcasing excellence in electric vehicle engineering."
    }
  ]

  const membershipsData = [
    {
      "Title": "Student Member",
      "Organization": "The American Society of Mechanical Engineers (ASME)",
      "Date": "Mar 2024",
      "MembershipID": "103814733",
      "Description": "Active participant in events and activities promoting professional development."
    },
    {
      "Title": "Member - IGEN GREEN9ENSAVCLUB",
      "Organization": "The Institution of Green Engineers",
      "Date": "Jan 2024",
      "Description": "Contributor to initiatives promoting sustainable engineering and environmental awareness."
    },
    {
      "Title": "Member",
      "Organization": "International Forum of Engineers and Researchers (IFERP)",
      "Date": "Feb 2024",
      "Description": "Networked with research professionals and engaged in global knowledge-sharing within the engineering community."
    },
    {
      "Title": "Member",
      "Organization": "National Society of Professional Engineers (NSPE)",
      "Date": "Feb 2024",
      "Description": "Adhered to NSPE Code of Ethics, prioritized public welfare, and ensured technical competence and truthful professional conduct."
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Certificates, Achievements, and Memberships</h2>
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Certificates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((certificate, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{certificate.Title}</h4>
              <p className="text-sm text-gray-600 mb-2">{certificate.Issuer}</p>
              <p className="text-sm text-gray-500 mb-2">{certificate.Date}</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">{certificate.Verification}</a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h3>
        <div className="space-y-6">
          {achievementsData.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.Title}</h4>
              <p className="text-sm text-gray-600 mb-2">{achievement.Issuer}</p>
              <p className="text-sm text-gray-500 mb-2">{achievement.Date}</p>
              <p className="text-sm text-gray-700">{achievement.Description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Memberships</h3>
        <div className="space-y-6">
          {membershipsData.map((membership, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{membership.Title}</h4>
              <p className="text-sm text-gray-600 mb-2">{membership.Organization}</p>
              <p className="text-sm text-gray-500 mb-2">{membership.Date}</p>
              {membership.MembershipID && (
                <p className="text-sm text-gray-500 mb-2">Membership ID: {membership.MembershipID}</p>
              )}
              <p className="text-sm text-gray-700">{membership.Description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}


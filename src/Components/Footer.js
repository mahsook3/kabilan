"use client"

import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-gray-100 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Phone Section */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="h-4 w-4" />
            <a 
              href="tel:+91-9361492586"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              +91-9361492586
            </a>
          </div>

          {/* Email Section */}
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4" />
            <a 
              href="mailto:ikabilank@gmail.com"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              ikabilank@gmail.com
            </a>
          </div>

          {/* Connect Section */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <span className="text-sm">Connect with me</span>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Social Icon 1"
                  width={20}
                  height={20}
                  className="rounded"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Social Icon 2"
                  width={20}
                  height={20}
                  className="rounded"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Social Icon 3"
                  width={20}
                  height={20}
                  className="rounded"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center md:text-right">
          <p className="text-sm text-gray-400">© 2025 By Kabilan K</p>
        </div>
      </div>
    </footer>
  )
}


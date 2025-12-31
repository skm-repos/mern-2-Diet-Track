import React from 'react'

function Header() {
  return (
    <nav className="relative bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Left: Logo */}
          <div className="shrink-0 text-xl font-bold">
            MyLogo
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-300 transition">New</a>
            <a href="#" className="hover:text-gray-300 transition">Services</a>
            <a href="#" className="hover:text-gray-300 transition">Testimonials</a>
            <a href="#" className="hover:text-gray-300 transition">About Us</a>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex space-x-4">
            <button className="px-4 py-1 rounded hover:bg-gray-700 transition">
              Login
            </button>
            <button className="px-4 py-1 rounded bg-blue-600 hover:bg-blue-500 transition">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header

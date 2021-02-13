import { useState } from 'react';
import Link from 'next/link';
import ActiveLink from './ActiveLink'

const Header = () => (
  <header className="bg-gray-800 max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <a>
              <img className="block h-8 w-auto" src="/images/profile.png" alt="Workflow"/>
            </a>
          </Link>
        </div>
        <nav className="hidden sm:block sm:ml-6">
          <ActiveLink
            href="/about"
            activeClassName="bg-gray-900 text-white"
            inactiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <a className="px-3 py-2 rounded-md text-sm font-medium">About</a>
          </ActiveLink>
          <ActiveLink
            href="/resume"
            activeClassName="bg-gray-900 text-white"
            inactiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <a className="px-3 py-2 rounded-md text-sm font-medium">Resume</a>
          </ActiveLink>
          <ActiveLink
            href="/projects"
            activeClassName="bg-gray-900 text-white"
            inactiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <a className="px-3 py-2 rounded-md text-sm font-medium">Projects</a>
          </ActiveLink>
          <ActiveLink
            href="/blog"
            activeClassName="bg-gray-900 text-white"
            inactiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <a className="px-3 py-2 rounded-md text-sm font-medium">Blog</a>
          </ActiveLink>
        </nav>
      </div>
    </div>
  </header>
)

export default Header;
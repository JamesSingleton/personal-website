import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-6 bg-gray-900">
        <div className="flex items-center flex-shrink-0 text-white">
          <Link href="/">
            <a>
              <span className="font-semibold text-2xl tracking-tight">James Singleton</span>
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center px-3 py-2 border rounded text-gray-100 border-gray-300 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div
          className={
            "w-full font-semibold flex-grow lg:flex lg:items-center lg:w-auto" +
            (!navbarOpen ? ' hidden' : '')
          }
        >
          <div className="lg:flex-grow lg:space-x-10 lg:text-right">
            <Link href="/about">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white">
                About Me
              </a>
            </Link>
            <Link href="/resume">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white">
                Resume
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
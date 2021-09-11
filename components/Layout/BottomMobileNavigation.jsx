import Link from "next/link";
import ActiveLink from "./ActiveLink";

const BottomMobileNavigation = () => (
  <div
    id="bottom-navigation"
    className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
  >
    <nav id="tabs" className="flex justify-between">
      <ActiveLink
        href="/"
        activeClassName="bg-gray-100"
        inactiveClassName="text-gray-400"
      >
        <a className="w-full justify-center inline-block text-center py-3">
          <svg
            className="inline-block mb-1 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="tab tab-home block text-xs">Home</span>
        </a>
      </ActiveLink>
      <ActiveLink
        href="/about"
        activeClassName="bg-gray-100"
        inactiveClassName="text-gray-400"
      >
        <a className="w-full justify-center inline-block text-center py-3">
          <svg
            className="inline-block mb-1 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="tab tab-kategori block text-xs">About</span>
        </a>
      </ActiveLink>
      <ActiveLink
        href="/projects"
        activeClassName="bg-gray-100"
        inactiveClassName="text-gray-400"
      >
        <a className="w-full justify-center inline-block text-center py-3">
          <svg
            className="inline-block mb-1 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span className="tab tab-whishlist block text-xs">Projects</span>
        </a>
      </ActiveLink>
      <ActiveLink
        href="/blog"
        activeClassName="bg-gray-100"
        inactiveClassName="text-gray-400"
      >
        <a className="w-full justify-center inline-block text-center py-3">
          <svg
            className="inline-block mb-1 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <span className="tab tab-account block text-xs">Blog</span>
        </a>
      </ActiveLink>
    </nav>
  </div>
);

export default BottomMobileNavigation;

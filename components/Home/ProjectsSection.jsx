import {
  FaUsersCog,
  FaHome,
  FaDollarSign,
  FaJs,
  FaReact,
} from "react-icons/fa";

const ProjectsSection = () => (
  <div className="relative bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
        Projects
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        Open Source and Personal Projects
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        A mix of personal projects and open source contributions on GitHub
      </p>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-500 to-red-600 rounded-md shadow-lg">
                    <FaDollarSign className="h-6 w-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Financian
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Sample small business loan website.
                </p>
                <a
                  href="https://financian.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center mt-6 text-base font-medium text-indigo-600"
                >
                  Visit
                  <svg
                    className="-mr-1 ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-500 to-red-600 rounded-md shadow-lg">
                    <FaHome className="h-6 w-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Investead
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Sample real estate listing website.
                </p>
                <a
                  href="https://investead.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center mt-6 text-base font-medium text-indigo-600"
                >
                  Visit
                  <svg
                    className="-mr-1 ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-500 to-red-600 rounded-md shadow-lg">
                    <FaUsersCog className="h-6 w-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Admin Dashboard
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  A sample admin dashboard
                </p>
                <a
                  href="https://admin-dashboard.jamessingleton.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center mt-6 text-base font-medium text-indigo-600"
                >
                  Visit
                  <svg
                    className="-mr-1 ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-500 to-red-600 rounded-md shadow-lg">
                    <FaJs className="h-6 w-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  One App
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  A fresh, modular take on web application development made by
                  American Express.
                </p>
                <a
                  href="https://one-amex-docs.americanexpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center mt-6 text-base font-medium text-indigo-600"
                >
                  Visit
                  <svg
                    className="-mr-1 ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-500 to-red-600 rounded-md shadow-lg">
                    <FaReact className="h-6 w-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Hooks Arsenal
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  A simple React hook library. Documentation site built with
                  Docusaurus.
                </p>
                <a
                  href="https://github.com/JamesSingleton/hooks-arsenal"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center mt-6 text-base font-medium text-indigo-600"
                >
                  Visit
                  <svg
                    className="-mr-1 ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-500 to-red-600 rounded-md shadow-lg">
                    <FaJs className="h-6 w-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Learn One App
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  A website for learning about One App built with Next.js.
                </p>
                <a
                  href="https://www.learn-one-app.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center mt-6 text-base font-medium text-indigo-600"
                >
                  Visit
                  <svg
                    className="-mr-1 ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsSection;

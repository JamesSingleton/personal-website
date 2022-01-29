import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  NAME,
  WEBSITE_DESCRIPTION,
  TWITTER_USER_NAME,
  LINKEDIN_USER_NAME,
} from '@/lib/constants'

const Hero = () => (
  <div className="bg-gray-900 pt-4 pb-10 sm:pb-0 sm:pt-16 lg:overflow-hidden lg:pt-8">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div className="lg:py-16">
            <h1 className="mt-4 space-x-4 text-center text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-left sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="bg-gradient-to-r from-rose-200 to-red-500 bg-clip-text text-transparent">
                {NAME}
              </span>
            </h1>
            <p className="mt-3 text-center text-base text-gray-300 sm:mt-5 sm:text-left sm:text-xl lg:text-lg xl:text-xl">
              {WEBSITE_DESCRIPTION}
            </p>
            <div className="mt-10 flex items-center justify-center sm:mt-12 sm:justify-start">
              <Link href="/about">
                <a className="block rounded-md bg-gradient-to-r from-rose-500 to-red-600 py-3 px-4 font-medium text-white shadow hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                  About Me
                </a>
              </Link>
              <a
                href={`https://www.linkedin.com/in/${LINKEDIN_USER_NAME}`}
                rel="noopener noreferrer"
                target="_blank"
                className="ml-6 text-gray-300 hover:text-gray-300"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin size={30} />
              </a>
              <a
                href={`https://twitter.com/${TWITTER_USER_NAME}`}
                rel="noopener noreferrer"
                target="_blank"
                className="ml-6 text-gray-300 hover:text-gray-300"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 -mb-16 hidden sm:-mb-48 sm:block lg:relative lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <Image
              alt="Avatar of James Singleton"
              src="/images/profile.png"
              height="472"
              width="472"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Hero

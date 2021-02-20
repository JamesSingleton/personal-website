import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  NAME,
  WEBSITE_DESCRIPTION,
  TWITTER_USER_NAME,
  LINKEDIN_USER_NAME,
} from "@/lib/constants";

const Hero = () => (
  <div className="pt-4 pb-10 sm:pb-0 bg-gray-900 sm:pt-16 lg:pt-8 lg:overflow-hidden">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-16">
            <h1 className="space-x-4 mt-4 text-4xl tracking-tight font-extrabold text-center text-white sm:mt-5 sm:text-6xl sm:text-left lg:mt-6 xl:text-6xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-200 to-red-500">
                {NAME}
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-300 text-center sm:mt-5 sm:text-xl sm:text-left lg:text-lg xl:text-xl">
              {WEBSITE_DESCRIPTION}
            </p>
            <div className="mt-10 sm:mt-12 flex items-center justify-center sm:justify-start">
              <Link href="/about">
                <a className="block py-3 px-4 rounded-md shadow bg-gradient-to-r from-rose-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
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
        <div className="mt-12 -mb-16 hidden sm:block sm:-mb-48 lg:m-0 lg:relative">
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
);
export default Hero;

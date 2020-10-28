import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import {TWITTER_USER_NAME, NAME, LINKEDIN_USER_NAME, GITHUB_USER_NAME} from '@/lib/constants';

const Footer = () => (
  <footer className="bg-gray-800 mt-12">
    <div className="mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-6 md:flex md:items-center md:justify-between">
      <div className="flex justify-center md:order-2">
        <a href={`https://www.linkedin.com/in/${LINKEDIN_USER_NAME}`} rel="noopener noreferrer" target="_blank" className="ml-6 text-gray-300 hover:text-gray-300">
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin size={30} />
        </a>
        <a href={`https://github.com/${GITHUB_USER_NAME}`} rel="noopener noreferrer" target="_blank" className="ml-6 text-gray-300 hover:text-gray-300">
          <span className="sr-only">GitHub</span>
          <FaGithub size={30} />
        </a>
        <a href={`https://twitter.com/${TWITTER_USER_NAME}`} rel="noopener noreferrer" target="_blank" className="ml-6 text-gray-300 hover:text-gray-300">
          <span className="sr-only">Twitter</span>
          <FaTwitter size={30} />
        </a>
        
      </div>
      <p className="mt-8 text-base leading-6 text-gray-300 md:mt-0 md:order-1 text-center">
        Copyright © {`${new Date().getFullYear()}`} {NAME}. All rights reserved.
      </p>    
    </div>
  </footer>
)

export default Footer
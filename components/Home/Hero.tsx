import { FC } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero: FC = () => {
  return (
    <div className="relative pt-52 pb-24">
      <div className="container px-4">
        <div className="flex flex-wrap">
          <div className="order-2 sm:order-1">
            <div className="mb-36">
              <span className="text-sm uppercase tracking-widest">
                welcome to my world
              </span>
              <h1 className="mb-5 text-6xl font-bold leading-tight">
                Hi, I&apos;m{' '}
                <span className="text-red-500">James Singleton</span>
                <br />
                <span>Software Engineer</span>
              </h1>
              <p className="max-w-lg">
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction.
                I&apos;m not adding motion just to spruce things up, but doing
                it in ways that.
              </p>
            </div>
            <div className="max-w-sm">
              <span className="uppercase tracking-widest">find me on</span>
              <ul className="mt-4 flex flex-wrap space-x-3">
                <li>
                  <a
                    href="https://github.com/JamesSingleton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-md bg-slate-700"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jamesrsingleton/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-md bg-slate-700"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Design__Pattern"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-md bg-slate-700"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 sm:order-2">
            <Image
              src="/images/profile.png"
              width={450}
              height={450}
              alt="Me"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

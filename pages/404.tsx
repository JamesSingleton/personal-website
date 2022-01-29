import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@components/common'

const Custom404 = () => (
  <div className="flex min-h-screen items-center">
    <div className="container mx-auto flex flex-wrap items-center p-4">
      <div className="w-full p-4 text-center md:w-5/12">
        <Image src="/images/404.svg" height="500" width="500" alt="404 Image" />
      </div>
      <div className="w-full p-4 text-center md:w-7/12 md:text-left">
        <div className="text-6xl font-medium">404</div>
        <div className="mb-4 text-xl font-medium md:text-3xl">
          Oops. This page has gone missing.
        </div>
        <div className="mb-8 text-lg">
          You may have mistyped the address or the page may have moved.
        </div>
        <Link href="/">
          <a className=" rounded-md bg-gradient-to-r from-rose-500 to-red-600 py-3 px-4 font-medium text-white shadow hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  </div>
)

Custom404.Layout = Layout

export default Custom404

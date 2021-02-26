import Image from "next/image";
import Link from "next/link";
import Page from "@/components/Layout/Page";

const Custom404 = () => (
  <Page title="404: This page could not be found">
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-4">
          <Image src="/images/404.svg" height="500" width="500" />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-6xl font-medium">404</div>
          <div className="text-xl md:text-3xl font-medium mb-4">
            Oops. This page has gone missing.
          </div>
          <div className="text-lg mb-8">
            You may have mistyped the address or the page may have moved.
          </div>
          <Link href="/">
            <a className=" py-3 px-4 rounded-md shadow bg-gradient-to-r from-rose-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
              Go Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Page>
);

export default Custom404;

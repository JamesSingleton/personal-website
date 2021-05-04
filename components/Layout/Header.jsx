import Link from "next/link";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import navlinks from "@/data/navlinks";

const Header = () => (
  <header className="relative">
    <div className="bg-gray-900 py-3">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="/images/profile.png"
                  alt="James Singleton Avatar"
                  height="40"
                  width="40"
                />
              </a>
            </Link>
          </div>
          <div className="hidden space-x-1 md:flex md:ml-10">
            {navlinks.map(({ link, label }) => (
              <ActiveLink
                href={link}
                activeClassName="bg-gray-800 text-white"
                inactiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
                key={label}
              >
                <a className="px-3 py-2 rounded-md text-base font-medium">
                  {label}
                </a>
              </ActiveLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;

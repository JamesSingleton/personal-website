import Link from 'next/link'

const Project = ({ url, title, description }) => (
  <a className="h-full" href={url} rel="noopener noreferrer" target="_blank">
    <div className="cursor-pointer h-full mb-3 duration-500 ease-in-out transform hover:scale-105">
      <div className="relative p-8 pb-16 bg-teal-900 h-full  text-default shadow-lg rounded-lg">
        <div>
          <h3 className="text-2xl font-semibold">
            <span className="flex flex-wrap items-center">{title}</span>
          </h3>
          <p className="mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  </a>
);

export default Project;
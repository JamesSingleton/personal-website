import Item from './Item';

const Feed = ({title}) => (
  <div className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
    <h2 className="inline-block -mx-3 p-3 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
      <a className="h-full" href="https://github.com/JamesSingleton/learn-one-app" rel="noopener noreferrer" target="_blank">
        <div className="cursor-pointer h-full mb-3 duration-500 ease-in-out transform hover:scale-105">
          <div className="relative p-8 pb-16 bg-teal-900 h-full  text-default shadow-lg rounded-lg">
            <div>
              <h3 className="text-2xl font-semibold">
                <span className="flex flex-wrap items-center">Learn One App</span>
              </h3>
              <p className="mt-2">
                Website for learning One App.
              </p>
            </div>
          </div>
        </div>
      </a>
      <a className="h-full" href="https://github.com/JamesSingleton/one-app-tools" rel="noopener noreferrer" target="_blank">
        <div className="cursor-pointer h-full mb-3 duration-500 ease-in-out transform hover:scale-105">
          <div className="relative p-8 pb-16 bg-teal-900 h-full  text-default shadow-lg rounded-lg">
            <div>
              <h3 className="text-2xl font-semibold">
                <span className="flex flex-wrap items-center">One App Tools</span>
              </h3>
              <p className="mt-2">
                A monorepo of tools to help with One App.
              </p>
            </div>
          </div>
        </div>
      </a>
      <a className="h-full" href="https://github.com/americanexpress/one-app" rel="noopener noreferrer" target="_blank">
        <div className="cursor-pointer h-full mb-3 duration-500 ease-in-out transform hover:scale-105">
          <div className="relative p-8 pb-16 bg-teal-900 h-full  text-default shadow-lg rounded-lg">
            <div>
              <h3 className="text-2xl font-semibold">
                <span className="flex flex-wrap items-center">One App</span>
              </h3>
              <p className="mt-2">
                ✨ a fresh, modular take on web application development
              </p>
            </div>
          </div>
        </div>
      </a>
      <a className="h-full" href="https://github.com/JamesSingleton/hooks-arsenal" rel="noopener noreferrer" target="_blank">
        <div className="cursor-pointer h-full mb-3 duration-500 ease-in-out transform hover:scale-105">
          <div className="relative p-8 pb-16 bg-teal-900 h-full  text-default shadow-lg rounded-lg">
            <div>
              <h3 className="text-2xl font-semibold">
                <span className="flex flex-wrap items-center">Hooks Arsenal</span>
              </h3>
              <p className="mt-2">
                React Hooks library
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
)

export default Feed;
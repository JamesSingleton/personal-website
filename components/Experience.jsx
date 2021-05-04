import { FaBriefcase } from "react-icons/fa";

const Experience = ({ experience }) => (
  <>
    <h3 className="flex items-center text-xs mb-1 text-blue-700 font-semibold">
      <svg
        className="mr-1 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
      EXPERIENCE
    </h3>
    {experience.map((item, index) => (
      <div
        className={`m1-b  ${
          index > 0 ? "border-light-grey border-t-2 mt-2 pt-2" : ""
        } `}
        key={`${item.company}, ${item.location} | ${item.date}`}
      >
        <h3 className="text-sm font-bold">{item.role}</h3>
        <h4 className="text-xs my-1 font-semibold">
          {`${item.company}, ${item.location} | ${item.date}`}
        </h4>

        {item.longDesc.map((desc) => (
          <div className="text-xs flex ml-2" key={desc}>
            <p className="mr-1">{`-`}</p>
            <p className="m-0">{desc}</p>
          </div>
        ))}

        <p className="text-xs mt-1 ml-2 text-blue-700 font-semibold">
          {item.tags}
        </p>
      </div>
    ))}
  </>
);

export default Experience;

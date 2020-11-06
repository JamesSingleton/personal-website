import {FaBriefcase} from 'react-icons/fa'

const Experience = ({experience}) => (
  <>
    <h5 className="flex items-center text-xs mb-1 text-blue-700 font-semibold">
      <FaBriefcase className="mr-1" />
      EXPERIENCE
    </h5>
    {experience.map((item, index) => (
      <div
        className={`m1-b  ${
          index > 0 ? "border-light-grey border-t-2 mt-2 pt-2" : ""
        } `}
        key={`${item.company}, ${item.location} | ${item.date}`}
      >
        <h3 className="text-sm font-bold">{item.role}</h3>
        <h5 className="text-xs my-1 font-semibold">
          {`${item.company}, ${item.location} | ${item.date}`}
        </h5>

        {item.longDesc.map((desc) => (
          <div className="text-xs flex ml-2" key={desc}>
            <p className="mr-1">{`•`}</p>
            <p className="m-0">{desc}</p>
          </div>
        ))}

        <p className="text-xs mt-1 ml-2 text-blue-700 font-semibold">{item.tags}</p>
      </div>
    ))}
  </>
)

export default Experience;
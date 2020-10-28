import {FaRegFileCode} from 'react-icons/fa'

const SkillsSection = ({heading, icon, colsClass, skills, noBorderTop}) =>(
  <>
    <h5 className={`${
        !noBorderTop ? "border-light-grey border-t-2  mt-2 pt-2" : " mt-0"
      }  flex items-center text-xs mb-1 text-blue font-semibold`}
    >
      <FaRegFileCode className="mr-1 h-3" />
      {heading}
    </h5>
    {/* <div className={colsClass}>
      {skills.map((skill) => (
        <div key={skill} className="pad-0">
          <p className="text-xs">{skill}</p>
        </div>
      ))}
    </div> */}
  </>
)

export default SkillsSection
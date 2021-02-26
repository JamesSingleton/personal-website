import { FaRegFileCode } from "react-icons/fa";

const SkillsSection = ({ heading, icon, colClass, skills, noBorderTop }) => (
  <>
    <h5
      className={`${
        !noBorderTop ? "border-light-grey border-t-2  mt-2 pt-2" : " mt-0"
      }  flex items-center text-xs mb-1 text-blue-700 font-semibold`}
    >
      <svg
        className="mr-1 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        />
      </svg>
      {heading}
    </h5>
    <div className={colClass}>
      {skills.map((skill) => (
        <div key={skill} className="pad-0">
          <p className="text-xs">{skill}</p>
        </div>
      ))}
    </div>
  </>
);

export default SkillsSection;

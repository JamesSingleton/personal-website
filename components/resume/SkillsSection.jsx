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
          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.29
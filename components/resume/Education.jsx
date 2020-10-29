import {FaPencilAlt} from 'react-icons/fa'
const Education = ({ education }) => (
  <>
    <h5 className="border-light-grey border-t-2  mt-2 pt-2 flex items-center text-xs mb-1 text-blue-700 font-semibold">
      <FaPencilAlt className="mr-1 h-3" />
      EDUCATION
    </h5>
    {education.map((item) => (
      <div className="" key={item.location}>
        <h4 className="text-xs font-bold">{`${item.type} - ${item.location}`}</h4>
        <p className="text-xs">{item.date}</p>
      </div>
    ))}
  </>
)

export default Education;
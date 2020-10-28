import {NAME} from '@/lib/constants'
import SkillsSection from './SkillsSection';
import Education from './Education'
import Experience from './Experience'

const Resume = () => (
  <div className="p-5">
    <h1 className="text-2xl font-bold">{NAME}</h1>
    <h2 className="text-sm font-semibold">www.jamessingleton.me | jamesrsingleton1@gmail.com</h2>
    <p className="text-xs border-light-grey border-b-2 pb-3 mb-3">Creative, collaborative and courages developer with extensive experience in web based technologies.</p>
    <div className="grid grid-cols-4 gap-4">
      <SkillsSection 
        noBorderTop
        heading="Technical Skills"
        className="grid grid-cols-2 gap-1"
      />
      <SkillsSection 
        heading="Technical Skills"
        className="grid grid-cols-1 gap-1"
      />
      <SkillsSection 
        heading="Technical Skills"
        className="grid grid-cols-2 gap-1"
      />
      <Education />
    </div>
    <div className="col-span-3">
      <Experience />
    </div>
  </div>
)

export default Resume;
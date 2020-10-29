import {NAME} from '@/lib/constants'
import SkillsSection from './SkillsSection';
import Education from './Education'
import Experience from './Experience'
import experienceData from '@/data/experience.json'
import educationData from '@/data/education.json'
import { CodeSkills } from '@/data/skills'

const SmallResume = () => (
  <div className="p-5">
    <h1 className="text-2xl font-bold">Samuel Larsen-Disney</h1>
    <h3 className="text-sm font-semibold">
      www.sld.codes | s.larsendisney@gmail.com
    </h3>
    <p className="text-xs border-light-grey border-b-2 pb-3 mb-3">
      Creative, collaborative and courageous developer with extensive experience
      in web based technologies and UX design. Looking for the next challenge to
      improve customer experience and deepen engagement.
    </p>
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 border-light-grey border-b-2 pb-3 mb-0">
        <Experience experience={experienceData} />
      </div>
      <div className="col-span-4">
        <SkillsSection
          noBorderTop
          heading="TECHNICAL SKILLS"
          colClass="grid grid-cols-2 gap-1"
          skills={CodeSkills}
        />
      </div>
      <div className="col-span-4">
        <Education education={educationData} />
      </div>
    </div>
  </div>
)

export default SmallResume;
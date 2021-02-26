import { NAME } from "@/lib/constants";
import SkillsSection from "./SkillsSection";
import Education from "./Education";
import Experience from "./Experience";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import { CodeSkills } from "@/data/skills";

const FullResume = () => (
  <div className="p-5">
    <h1 className="text-2xl font-bold">{NAME}</h1>
    <h2 className="text-sm font-semibold">
      www.jamessingleton.me | jamesrsingleton1@gmail.com
    </h2>
    <p className="text-xs border-light-grey border-b-2 pb-3 mb-3">
      Software Engineer with a passion for learning new technologies.
    </p>
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <SkillsSection
          noBorderTop
          heading="TECHNICAL SKILLS"
          colClass="grid grid-cols-2 gap-1"
          skills={CodeSkills}
        />
        <Education education={educationData} />
      </div>
      <div className="col-span-3">
        <Experience experience={experienceData} />
      </div>
    </div>
  </div>
);

export default FullResume;

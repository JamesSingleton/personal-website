import Page from "@/components/Layout/Page";
import FullResume from "@/components/Resume/FullResume";
import SmallResume from "@/components/Resume/SmallResume";
import { NAME, WEBSITE_DESCRIPTION } from "@/lib/constants";

const ResumePage = () => (
  <Page title={`Resume | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
    <div className="w-full text-center py-4">
      <h1 className="text-5xl font-extrabold tracking-tighter leading-tight text-gray-100">
        Resume
      </h1>
    </div>
    <div className="block md:hidden bg-white text-black p-2 mx-2">
      <SmallResume />
    </div>
    <div className="mx-auto bg-white hidden md:block md:w-3/4 lg:w-196">
      <FullResume />
    </div>
  </Page>
);

export default ResumePage;

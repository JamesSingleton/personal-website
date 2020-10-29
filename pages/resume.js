import Page from '@/components/Page';
import Resume from '@/components/resume/Resume'
import SmallResume from '@/components/resume/SmallResume'
import { NAME, WEBSITE_DESCRIPTION } from '@/lib/constants';

const ResumePage = () => (
  <Page title={`Resume | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
    {/* <div className="w-full text-center">
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Download Resume
      </button>
    </div> */}
    <div className="block md:hidden bg-white text-black p-2 mx-2">
      <SmallResume />
    </div>
    <div className="mx-auto bg-white w-1/2 mt-12">
      <Resume />
    </div>
  </Page>
);

export default ResumePage;
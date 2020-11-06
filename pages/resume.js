import Page from '@/components/Page';
import FullResume from '@/components/Resume/FullResume'
import SmallResume from '@/components/Resume/SmallResume'
import { NAME, WEBSITE_DESCRIPTION } from '@/lib/constants';

const ResumePage = () => (
  <Page title={`Resume | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
    <div className="block md:hidden bg-white text-black p-2 mx-2 mt-12">
      <SmallResume />
    </div>
    <div className="mx-auto bg-white mt-12 hidden md:block md:w-3/4 lg:w-1/2">
      <FullResume />
    </div>
  </Page>
);

export default ResumePage;
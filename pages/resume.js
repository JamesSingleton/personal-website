import Page from '@/components/Page';
import Resume from '@/components/resume/Resume'
import { NAME, WEBSITE_DESCRIPTION } from '@/lib/constants';

const ResumePage = () => (
  <Page title={`Resume | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
    <div className="mx-auto bg-white w-3/5">
      <Resume />
    </div>
  </Page>
);

export default ResumePage;
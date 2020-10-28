import Page from '@/components/Page';
import Resume from '@/components/resume/Resume'
import { NAME, WEBSITE_DESCRIPTION } from '@/lib/constants';

const ResumePage = () => (
  <Page title={`Resume | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
    <div className="paper">
      <Resume />
    </div>
  </Page>
);

export default ResumePage;
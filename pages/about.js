import Page from '@/components/Page';
import { NAME, WEBSITE_DESCRIPTION } from '@/lib/constants';



const About = () =>  (
  <Page title={`About | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
    <h1>About</h1>
  </Page>
);

export default About;
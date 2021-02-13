import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Page from '@/components/Layout/Page';
import { NAME, WEBSITE_DESCRIPTION } from '@/lib/constants';
// import { getAllSimpleText } from '@/lib/api'
// import markdownStyles from '@/components/Articles/markdown-styles.module.css'



const About = ({ data }) =>  (
  <Page>
    <div className="w-full p-4">
      <h1 className="text-5xl font-extrabold tracking-tighter leading-tight text-gray-100 text-center">About Me</h1>
      <div className="max-w-2xl mx-auto">
        About Me
      </div>
    </div>
  </Page>
);

export default About;
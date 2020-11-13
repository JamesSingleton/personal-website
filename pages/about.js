import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Page from '@/components/Page';
import { NAME, WEBSITE_DESCRIPTION } from '@/lib/constants';
import { getAllSimpleText } from '@/lib/api'
import markdownStyles from '@/components/Articles/markdown-styles.module.css'



const About = ({ data }) =>  {
  console.log({data})
  return (
    <Page title={`About | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
      <div className="w-full p-4">
        <h1 className="text-5xl font-extrabold tracking-tighter leading-tight text-gray-100 text-center">{data[0].title}</h1>
        <div className="max-w-2xl mx-auto">
          <div className={markdownStyles['markdown']}>
            {documentToReactComponents(data[0].text)}
          </div>
        </div>
      </div>
    </Page>
  )
};


export async function getServerSideProps(context) {
  const data = await getAllSimpleText()
  return {
    props: {
      data
    },
  }
}
export default About;
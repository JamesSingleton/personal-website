import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Page from "@/components/Layout/Page";
import { NAME, WEBSITE_DESCRIPTION } from "@/lib/constants";
// import { getAllSimpleText } from '@/lib/api'
// import markdownStyles from '@/components/Articles/markdown-styles.module.css'

const About = ({ data }) => (
  <Page title={`About | ${NAME}`} description="Read about James Singleton">
    <div className="px-4 py-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto prose prose-indigo">
        <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          About Me
        </h1>
        <p className="mt-8 text-xl text-gray-700 leading-8">
          I graduated from Virginia Military Institute with a Bachelor of
          Science in Computer Science. Most of the time you can find me coding
          in React, JavaScript & Next.js but I am always open to learning new
          languages. When developing I like to ensure that my code is clean,
          accessible as well as performant.
        </p>
        <p className="mt-8 text-xl text-gray-700 leading-8">
          I joined American Express in October 2018 as a Lead UI Engineer for
          the Customer 360 team which falls under the Global Risk Technologies
          umbrella in their Sunrise, FL campus. During my time on the team, I
          led a team of six UI engineers in an effort to migrate the existing
          application written in Angular 1 over to a React.js framework created
          by American Express called{" "}
          <a
            href="https://github.com/americanexpress/one-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            One App
          </a>
          . We released the revamped application at the beginning of August 2019
          to over 1,200 Customer Care Professionals.
        </p>
        <p className="mt-8 text-xl text-gray-700 leading-8">
          After a year of being on the consuming end of One App, I decided to
          move to the team that created it. In October 2019, I moved to the One
          Amex team in their Tempe, AZ office. When I first joined their team I
          was in charge of onboarding all new teams within American Express to
          our framework. This included provisioning their environments as well
          as walking teams the ins and outs of our framework. Since then I have
          transitioned to being an integral part of the team and have helped
          open source twenty-seven libraries on GitHub in the past year.
        </p>
        <p className="mt-8 text-xl text-gray-700 leading-8">
          When I am not working, you can often find me hiking the deserts of
          Arizona with my two dogs Xena and Nola, or brushing up on my
          photography skills.
        </p>
      </div>
    </div>
  </Page>
);

export default About;

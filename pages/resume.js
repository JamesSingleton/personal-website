import { Component } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Page from "@/components/Layout/Page";
import FullResume from "@/components/Resume/FullResume";
import SmallResume from "@/components/Resume/SmallResume";
import { NAME, WEBSITE_DESCRIPTION } from "@/lib/constants";

class ResumePage extends Component {
  pdfExportComponent;
  render() {
    return (
      <Page title={`Resume | ${NAME} - ${WEBSITE_DESCRIPTION}`}>
        <div className="w-full text-center">
          <button
            onClick={() => this.pdfExportComponent.save()}
            className="my-8 py-3 px-4 rounded-md shadow bg-gradient-to-r from-rose-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          >
            Download Resume
          </button>
        </div>
        <div className="block md:hidden p-2 mx-2">
          <SmallResume />
        </div>
        <div
          style={{ width: "49.60625rem" }}
          className=" rounded mx-auto mb-8 hidden bg-white lg:block"
        >
          <PDFExport
            scale={0.75}
            paperSize="A4"
            margin="0cm"
            ref={(component) => (this.pdfExportComponent = component)}
            fileName="James-Singleton-Resume"
          >
            <FullResume />
          </PDFExport>
        </div>
      </Page>
    );
  }
}

export default ResumePage;

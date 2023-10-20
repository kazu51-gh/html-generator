import { FC } from "react";
import { GenerateHTML } from "@/generateHTML/generateHTML";
import PageTitle from "@/components/headings/pageTitle";

type Props = {
  pageTitle: string;
  pageDescription: string;
  textareaData: string;
}

const HtmlDownload:FC<Props> = ({ pageTitle, pageDescription, textareaData }) => {
  const makeHTML = (title: string, description: string, textareaData: string) => {
    const generateHTML = new GenerateHTML();
    const text = generateHTML.generate(title, description, textareaData);
    const downloadData = new Blob([text], {type: 'text/html'});
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(downloadData);
    downloadLink.download = 'sample.html';
    downloadLink.click();
  }

  return(
    <div>
      <PageTitle title="HTMLファイルのダウンロード" />
      <button
        className="bg-white border border-black font-medium inline-block my-4 px-8 py-4 rounded text-base text-black"
        onClick={() => makeHTML(pageTitle, pageDescription, textareaData)}
        type="button"
      >
        ダウンロード
      </button>
    </div>
  );
}

export default HtmlDownload;

import { FC } from "react";
import { GenerateHTML } from "@/generateHTML/generateHTML";

type Props = {
  pageTitle: string;
  pageDescription: string;
  textareaData: string;
}

const DownloadButton: FC<Props> = ({ pageTitle, pageDescription, textareaData }) => {
  const makeHTML = (title: string, description: string, textareaData: string) => {
    const generateHTML = new GenerateHTML();
    const contents = textareaData.split('\n');
    let contentsList = [];
    for(let i = 0; i < contents.length; i++) {
      const code = '\t\t' + contents[i];
      if (code !== '\t\tundefined') { contentsList.push(code); }
    }
    const text = generateHTML.generate(title, description, contentsList.join('\r\n'));
    const downloadData = new Blob([text], {type: 'text/html'});
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(downloadData);
    downloadLink.download = 'sample.html';
    downloadLink.click();
  }

  return(
    <div>
      <button
        className="border border-black font-medium p-2 rounded text-lg dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
        onClick={() => makeHTML(pageTitle, pageDescription, textareaData)}
        type="button"
      >
        HTMLファイルのダウンロード
      </button>
    </div>
  );
}

export default DownloadButton;

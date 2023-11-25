import { FC } from "react";
import { CreateHTMLDocument } from "@/DocumentFactory/createHTMLDocument";

type Props = {
  pageTitle: string;
  pageDescription: string;
  textareaData: string;
}

const DownloadButton: FC<Props> = ({ pageTitle, pageDescription, textareaData }) => {
  const makeHTML = (title: string, description: string, textareaData: string) => {
    const contents = textareaData.split('\n');
    let contentsList: string[] = [];
    [...Array(contents.length)].forEach((_, i) => {
      const code = '\t\t' + contents[i];
      if (code !== '\t\tundefined') { contentsList.push(code); }
    });
    const createHTML = new CreateHTMLDocument(title, description, contentsList.join('\r\n'));
    const html = createHTML.create();
    const downloadData = new Blob([html], {type: 'text/html'});
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

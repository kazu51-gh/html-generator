import { basePath } from "../../next.config";
import path from "path";

const BASE_PATH = basePath ? basePath : '';

type Props = {
  textareaData: string
}

const makeHTML = (textareaData: string) => {
  const htmlTemplate = `
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="{description}">
    <title>{title}</title>
  </head>
  <body>
    {contents}
  </body>
</html>
`;

  const text = htmlTemplate.replace('{contents}', textareaData);
  const downloadData = new Blob([text], {type: 'text/html'});
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(downloadData);
  downloadLink.download = 'sample.html';
  downloadLink.click();
}

const HtmlDownload = ({ textareaData }: Props) => {
  return(
    <div>
      <div className="flex">
        <h2 className="mr-2 text-2xl">HTMLファイルのダウンロード</h2>
        <div className="flex items-center">
          <img
            alt="question_mark"
            className="cursor-pointer h-5 w-5"
            src={path.join(BASE_PATH, "question-mark.png")}
          />
        </div>
      </div>
      <div className="download-html">
        <button
          className="bg-white border border-black font-medium inline-block my-4 px-8 py-4 rounded text-base text-black"
          onClick={() => makeHTML(textareaData)}
          type="button"
        >
          ダウンロード
        </button>
      </div>
    </div>
  );
}

export default HtmlDownload;

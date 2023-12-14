import { FC } from "react";
import { HTMLDownloadUtility } from "@/utils/htmlDownloadUtility";

type Props = {
  pageTitle: string;
  pageDescription: string;
  textareaData: string;
}

const DownloadButton: FC<Props> = ({ pageTitle, pageDescription, textareaData }) => {
  const downloadUtility = new HTMLDownloadUtility(pageTitle, pageDescription, textareaData);

  return(
    <div>
      <button
        className="border border-black font-medium p-2 rounded text-lg dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
        onClick={() => downloadUtility.downloadHTMLDocument()}
        type="button"
      >
        HTMLファイルのダウンロード
      </button>
    </div>
  );
}

export default DownloadButton;

import { FC } from "react";
import { HTMLDocumentData } from "@/types/htmlData";
import { HTMLDownloadUtility } from "@/utils/htmlDownloadUtility";

const DownloadButton: FC<HTMLDocumentData> = ({ pageTitle, pageDescription, textareaData }) => {
  const downloadUtility = new HTMLDownloadUtility(pageTitle, pageDescription, textareaData);

  return(
    <div>
      <button
        className="border border-black font-medium p-2 rounded text-lg"
        onClick={() => downloadUtility.downloadHTMLDocument()}
        type="button"
      >
        HTMLファイルのダウンロード
      </button>
    </div>
  );
}

export default DownloadButton;

import { BodyData } from "@/types/bodyData";
import { FC } from "react";
import { HeadData } from "@/types/headData";
import { HTMLDownloadUtility } from "@/utils/htmlDownloadUtility";

type HTMLDocumentData = HeadData & BodyData;

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

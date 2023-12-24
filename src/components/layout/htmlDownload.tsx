import { BodyData } from "@/types/bodyData";
import { FC } from "react";
import { HeadData } from "@/types/headData";
import DownloadButton from "@/components/button/downloadButton";
import PageTitle from "@/components/headings/pageTitle";

type HTMLDocumentData = HeadData & BodyData;

const HTMLDownload: FC<HTMLDocumentData> = ({ pageTitle, pageDescription, textareaData }) => {
  return(
    <div className="h-full w-full">
      <PageTitle title="ダウンロード" />
      <DownloadButton
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        textareaData={textareaData}
      />
    </div>
  );
}

export default HTMLDownload;

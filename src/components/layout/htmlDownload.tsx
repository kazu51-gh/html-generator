import { FC } from "react";
import { HTMLDocumentData } from "@/types/htmlData";
import DownloadButton from "@/components/buttons/downloadButton";
import PageTitle from "@/components/headings/pageTitle";

const HtmlDownload:FC<HTMLDocumentData> = ({ pageTitle, pageDescription, textareaData }) => {
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

export default HtmlDownload;

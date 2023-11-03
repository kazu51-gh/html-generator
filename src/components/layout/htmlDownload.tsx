import { FC } from "react";
import DownloadButton from "@/components/buttons/downloadButton";
import PageTitle from "@/components/headings/pageTitle";

type Props = {
  pageTitle: string;
  pageDescription: string;
  textareaData: string;
}

const HtmlDownload:FC<Props> = ({ pageTitle, pageDescription, textareaData }) => {
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

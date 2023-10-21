import { FC } from "react";
import DownloadButton from "./buttons/downloadButton";
import PageTitle from "@/components/headings/pageTitle";

type Props = {
  pageTitle: string;
  pageDescription: string;
  textareaData: string;
}

const HtmlDownload:FC<Props> = ({ pageTitle, pageDescription, textareaData }) => {
  return(
    <div>
      <PageTitle title="HTMLファイルのダウンロード" />
      <DownloadButton
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        textareaData={textareaData}
      />
    </div>
  );
}

export default HtmlDownload;

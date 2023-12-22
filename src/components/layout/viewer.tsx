import { BodyData } from "@/types/htmlData";
import { FC } from "react";
import PageTitle from "@/components/headings/pageTitle";
import parse from "html-react-parser";

const Viewer: FC<BodyData> = ({ textareaData, setTextareaData }) => {
  return(
    <div className="h-full w-full">
      <PageTitle title="プレビュー" />
      <div className="border border-black rounded h-[90%] p-1.5">
        <div className="default-css">
          {parse(textareaData)}
        </div>
      </div>
    </div>
  );
}

export default Viewer;

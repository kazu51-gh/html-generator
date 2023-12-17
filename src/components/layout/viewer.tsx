import { FC } from "react";
import PageTitle from "@/components/headings/pageTitle";
import parse from "html-react-parser";

type Props = {
  textareaData: string;
}

const Viewer: FC<Props> = ({ textareaData }) => {
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

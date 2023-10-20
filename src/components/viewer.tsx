import { FC } from "react";
import parse from "html-react-parser";
import PageTitle from "@/components/headings/pageTitle";

type Props = {
  textareaData: string;
}

const Viewer: FC<Props> = ({ textareaData }) => {
  
  return(
    <div className="h-full">
      <PageTitle title="プレビュー" />
      <div className="block border border-black h-5/6 mt-3 p-2 w-11/12">
        <div className="default-css">
          {parse(textareaData)}
        </div>
      </div>
    </div>
  );
}

export default Viewer;

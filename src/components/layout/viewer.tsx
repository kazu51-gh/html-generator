import { FC } from "react";
import parse from "html-react-parser";
import PageTitle from "@/components/headings/pageTitle";

type Props = {
  textareaData: string;
}

const Viewer: FC<Props> = ({ textareaData }) => {
  return(
    <div className="h-full w-full">
      <PageTitle title="プレビュー" />
      <div className="block border border-black rounded-md h-[90%] my-3 px-2 w-11/12 dark:bg-white dark:border-gray-500 dark:text-black">
        <div className="default-css">
          {parse(textareaData)}
        </div>
      </div>
    </div>
  );
}

export default Viewer;

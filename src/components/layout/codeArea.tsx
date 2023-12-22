import { BodyData } from "@/types/htmlData";
import { FC } from "react";
import PageTitle from "@/components/headings/pageTitle";

const CodeArea: FC<BodyData> = ({ textareaData, setTextareaData }) => {
  return(
    <div className="h-full w-full">
      <PageTitle title="コードエリア" />
      <textarea
        className="border border-black p-1.5 resize-none rounded text-lg h-[90%] w-full"
        onChange={(e) => setTextareaData(e.target.value)}
        placeholder="HTMLを作成していきましょう"
        value={textareaData}
      ></textarea>
    </div>
  );
}

export default CodeArea;

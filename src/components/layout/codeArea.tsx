import { BodyData, BodyDataState } from "@/types/bodyData";
import { FC } from "react";
import PageTitle from "@/components/headings/pageTitle";

type Body = BodyData & BodyDataState;

const CodeArea: FC<Body> = ({ textareaData, setTextareaData }) => {
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

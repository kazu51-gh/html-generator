import { BodyData, BodyDataState } from "@/types/bodyData";
import { FC } from "react";
import ElementInputWindow from "@/components/textarea/elementInputWindow";
import PageTitle from "@/components/headings/pageTitle";

type Body = BodyData & BodyDataState;

const CodeArea: FC<Body> = ({ textareaData, setTextareaData }) => {
  return(
    <div className="h-full w-full">
      <PageTitle title="コードエリア" />
      <ElementInputWindow
        textareaData={textareaData}
        setTextareaData={setTextareaData}
      />
    </div>
  );
}

export default CodeArea;

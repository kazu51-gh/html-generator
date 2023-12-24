import { BodyData, BodyDataState } from "@/types/bodyData";
import { FC } from "react";

type Body = BodyData & BodyDataState;

const ElementInputWindow: FC<Body> = ({ textareaData, setTextareaData }) => {
  return(
    <textarea className="border border-black p-1 resize-none rounded text-lg h-[90%] w-full"
      onChange={(e) => setTextareaData(e.target.value)}
      placeholder="HTMLを作成していきましょう"
      value={textareaData}
    ></textarea>
  );
}

export default ElementInputWindow;

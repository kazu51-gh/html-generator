import { CodeUtility } from "@/utils/codeUtility";
import { FC } from "react";

type Props = {
  tagName: string;
  attributes: string[];
  content?: string;
  lists?: number;
  columns?: number;
  rows?: number;
}

const DisplayCode: FC<Props> = ({ tagName, attributes, content = '', lists = 0, columns = 0, rows = 0 }) => {
  const code = CodeUtility.createCode(tagName, attributes, content, lists, columns, rows);

  return(
    <div className="w-full">
      <div className="border border-black p-1 my-2 whitespace-pre-wrap">
        {code}
      </div>
      <button
        className="block border border-black p-1 mx-auto rounded hover:bg-slate-100"
        onClick={() => CodeUtility.copyCode(code)}
      >
        コードをコピー
      </button>
    </div>
  );
}

export default DisplayCode;

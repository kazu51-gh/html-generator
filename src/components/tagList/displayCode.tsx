import { FC } from "react";
import { GenerateElement } from "@/generateTag/generateElement";

type Props = {
  tagName: string;
  attributes: string[];
  lists: number;
  columns: number;
  rows: number;
}

const DisplayCode: FC<Props> = ({ tagName, attributes, lists, columns, rows }) => {
  const generateElement = new GenerateElement();
  const code = generateElement.generateElement(tagName, attributes, '', lists, columns, rows);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(
      () => { console.log('コピー成功'); },
      () => { alert('コピー失敗'); }
    )
  }

  return(
    <div>
      <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap dark:bg-gray-500 dark:text-gray-300">
        {code}
      </div>
      <button
        className="bg-white border border-black font-medium inline-block mx-2 my-3 px-2 py-1 rounded text-base text-black hover:bg-slate-100 dark:hover:bg-slate-700 dark:bg-slate-600 dark:border-gray-300 dark:text-gray-300"
        onClick={() => copyCode(code)}
      >
        コードをコピー
      </button>
    </div>
  );
}

export default DisplayCode;

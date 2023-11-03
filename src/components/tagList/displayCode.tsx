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
    <div className="w-full">
      <div className="border border-black p-1 my-2 whitespace-pre-wrap dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300">
        {code}
      </div>
      <button
        className="block border border-black p-1 mx-auto rounded hover:bg-slate-100 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-600"
        onClick={() => copyCode(code)}
      >
        コードをコピー
      </button>
    </div>
  );
}

export default DisplayCode;

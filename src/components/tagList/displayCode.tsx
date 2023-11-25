import { FC } from "react";
import { headingElements, listElements, voidElements } from "@/data/elementData";
import { NormalElementFactory } from "@/ElementFactory/normalElementFactory";
import { VoidElementFactory } from "@/ElementFactory/voidElementFactory";
import { ListElementFactory } from "@/ElementFactory/listElementFactory";
import { TableElementFactory } from "@/ElementFactory/tableElementFactory";

type Props = {
  tagName: string;
  attributes: string[];
  content?: string;
  lists?: number;
  columns?: number;
  rows?: number;
}

const DisplayCode: FC<Props> = ({ tagName, attributes, content = '', lists = 0, columns = 0, rows = 0 }) => {
  const createCode = (tagName: string, attributes: string[], content: string, lists: number, columns: number, rows: number): string => {
    if (voidElements.includes(tagName)) {
      const voidElementFactory = new VoidElementFactory(tagName, attributes);
      const code = voidElementFactory.createElement();
      return(code);
    } else if (headingElements.includes(tagName)) {
      const normalElementFactory = new NormalElementFactory(tagName, attributes, content);
      const code = normalElementFactory.createElement();
      return(code);
    } else if (listElements.includes(tagName)) {
      const listElementFactory = new ListElementFactory(tagName, attributes, lists);
      const code = listElementFactory.createElement();
      return(code);
    } else if (tagName === 'table') {
      const tableElementFactory = new TableElementFactory(tagName, attributes, columns, rows);
      const code = tableElementFactory.createElement();
      return(code);
    } else {
      const normalElementFactory = new NormalElementFactory(tagName, attributes, content);
      const code = normalElementFactory.createElement();
      if (code !== '') { return(code); }
      else { return('コードが生成出来ませんでした'); }
    }
  }

  const code = createCode(tagName, attributes, content, lists, columns, rows);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(
      () => { console.log('コピー成功'); },
      () => { alert('コピー失敗'); }
    );
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

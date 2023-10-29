import { FC } from "react";
import { GenerateElement } from "@/generateTag/generateElement";

type Props = {
  tagName: string;
  attributes: string[];
  content: string;
  lists: number;
  columns: number;
  rows: number;
}

const DisplayCode: FC<Props> = ({ tagName, attributes, content, lists, columns, rows }) => {
  const generateElement = new GenerateElement();
  return(
    <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap dark:bg-gray-500 dark:text-gray-300">
      {generateElement.generateElement(tagName, attributes, content, lists, columns, rows)}
    </div>
  );
}

export default DisplayCode;

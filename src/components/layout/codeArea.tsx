import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  textareaData: string;
  setTextareaData: Dispatch<SetStateAction<string>>;
}

const CodeArea: FC<Props> = ({ textareaData, setTextareaData }) => {
  return(
    <textarea
      className="border border-black p-1.5 resize-none rounded text-lg h-full w-full dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
      onChange={(e) => setTextareaData(e.target.value)}
      placeholder="HTMLを作成していきましょう"
      value={textareaData}
    ></textarea>
  );
}

export default CodeArea;

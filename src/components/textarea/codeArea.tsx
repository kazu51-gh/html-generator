import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  textareaData: string;
  setTextareaData: Dispatch<SetStateAction<string>>;
}

const CodeArea: FC<Props> = ({ textareaData, setTextareaData }) => {
  return(
    <textarea
      className="block border border-black mx-auto px-3 py-1.5 resize-none rounded-md text-lg w-11/12 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
      rows={25}
      onChange={(e) => setTextareaData(e.target.value)}
      placeholder="HTMLを作成していきましょう。"
      value={textareaData}
    ></textarea>
  );
}

export default CodeArea;

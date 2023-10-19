import { FC } from "react";
import { basePath } from "../../next.config";
import path from "path";
import parse from "html-react-parser";

const BASE_PATH = basePath ? basePath : '';

type Props = {
  textareaData: string;
}

const Viewer: FC<Props> = ({ textareaData }) => {
  
  return(
    <div className="h-full">
      <div className="flex">
        <h2 className="mr-2 text-2xl">プレビュー</h2>
        <div className="flex items-center">
          <img
            alt="question_mark"
            className="cursor-pointer h-5 w-5"
            src={path.join(BASE_PATH, "question-mark.png")}
          />
        </div>
      </div>
      <div className="block border border-black h-5/6 mt-3 p-2 w-11/12">
        <div className="default-css">
          {parse(textareaData)}
        </div>
      </div>
    </div>
  );
}

export default Viewer;

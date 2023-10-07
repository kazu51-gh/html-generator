import Accordion from "./accordion";
import { basePath } from "../../next.config";
import path from "path";

const BASE_PATH = basePath ? basePath : '';

const TagLists = () => {
  return(
    <div>
      <div className="flex">
        <h2 className="mr-2 text-2xl">タグ一覧</h2>
        <div className="flex items-center">
          <img
            alt="question_mark"
            className="cursor-pointer h-5 w-5"
            src={path.join(BASE_PATH, "question-mark.png")}
          />
        </div>
      </div>
      <div className="mt-4 max-w-lg">
        <div className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <Accordion title="title" description="xxx" />
          <Accordion title="title" description="xxx" />
          <Accordion title="title" description="xxx" />
          <Accordion title="title" description="xxx" />
        </div>
      </div>
    </div>
  );
}

export default TagLists;

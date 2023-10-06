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
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
              hタグ
              <div className="text-secondary-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </summary>
            <div className="border-t border-t-gray-100 p-4 text-secondary-500">hタグの内容</div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
              pタグ
              <div className="text-secondary-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </summary>
            <div className="border-t border-t-gray-100 p-4 text-secondary-500">pタグの内容</div>
          </details>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
              aタグ
              <div className="text-secondary-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </summary>
            <div className="border-t border-t-gray-100 p-4 text-secondary-500">aタグの内容</div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default TagLists;

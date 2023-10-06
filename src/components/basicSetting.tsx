import { basePath } from "../../next.config";
import path from "path";
import { useState } from "react";

const BASE_PATH = basePath ? basePath : '';

const BasicSetting = () => {
  const [pageTitle, setPageTitle] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  const [openModal, setOpenModal] = useState(false);

  return(
    <div>
      {openModal === true &&
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
          <div className="border border-black mx-auto overflow-hidden rounded-lg bg-white sm:w-full sm:max-w-xl">
            <div className="relative p-6">
              <button
                className="absolute top-4 right-4 rounded-lg p-1 text-center font-medium transition-all"
                onClick={() => setOpenModal(false)}
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
              <h3 className="text-lg font-medium">タイトル</h3>
              <div className="mt-2 text-sm">説明文が表示されます。置き換え予定。</div>
            </div>
          </div>
        </div>
      }
      <div className="flex">
        <h2 className="mr-2 text-2xl">ページの基本情報</h2>
        <div className="flex items-center">
          <img
            alt="question_mark"
            className="cursor-pointer h-5 w-5"
            onClick={() => setOpenModal(true)}
            src={path.join(BASE_PATH, "question-mark.png")}
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <h3 className="mr-3 my-3 text-xl">ページタイトル</h3>
          <div className="flex items-center">
            <img
              alt="question_mark"
              className="cursor-pointer h-5 w-5"
              onClick={() => setOpenModal(true)}
              src={path.join(BASE_PATH, "i-mark.png")}
            />
          </div>
        </div>
        <input
          className="border border-black p-2 rounded-md text-xl w-1/2"
          onChange={(e) => setPageTitle(e.target.value)}
          placeholder="(例) 私のホームページ"
          type="text"
          value={pageTitle}
        />
      </div>
      <div>
        <div className="flex">
          <h3 className="mr-3 my-3 text-xl">ページの説明</h3>
          <div className="flex items-center">
            <img
              alt="question_mark"
              className="cursor-pointer h-5 w-5"
              onClick={() => setOpenModal(true)}
              src={path.join(BASE_PATH, "i-mark.png")}
            />
          </div>
        </div>
        <input
          className="border border-black p-2 rounded-md text-xl w-1/2"
          onChange={(e) => setPageDescription(e.target.value)}
          placeholder="(例) 私のことを知ってください。"
          type="text"
          value={pageDescription}
        />
      </div>
    </div>
  );
}

export default BasicSetting;

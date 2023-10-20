import { Dispatch, FC, SetStateAction } from "react";
import { basePath } from "../../next.config";
import path from "path";
import Setting from "@/components/input/pageSetting/setting";

const BASE_PATH = basePath ? basePath : '';

type Props = {
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
  pageDescription: string;
  setPageDescription: Dispatch<SetStateAction<string>>;
}

const BasicSetting: FC<Props> = ({ pageTitle, setPageTitle, pageDescription, setPageDescription }) => {

  return(
    <div>
      <div className="flex">
        <h2 className="mr-2 text-2xl">ページの基本情報</h2>
        <div className="flex items-center">
          <img
            alt="question_mark"
            className="cursor-pointer h-5 w-5"
            src={path.join(BASE_PATH, "question-mark.png")}
          />
        </div>
      </div>
      <Setting
        setSetting={setPageTitle}
        placeholder="(例) 私のホームページ"
        value={pageTitle}
        headingTitle="ページのタイトル"
      />
      <Setting
        setSetting={setPageDescription}
        placeholder="(例) 私のことを知ってください。"
        value={pageDescription}
        headingTitle="ページの説明"
      />
    </div>
  );
}

export default BasicSetting;

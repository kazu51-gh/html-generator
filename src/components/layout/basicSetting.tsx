import { Dispatch, FC, SetStateAction } from "react";
import { headingDescriptions } from "@/data/headingData";
import DisabledValue from "@/components/input/disabledValue";
import PageTitle from "@/components/headings/pageTitle";
import SettingTitle from "@/components/headings/settingTitle";
import SettingWindow from "@/components/input/settingWindow";
import { GenerateHTML } from "@/generateHTML/generateHTML";

type Props = {
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
  pageDescription: string;
  setPageDescription: Dispatch<SetStateAction<string>>;
}

const BasicSetting: FC<Props> = ({ pageTitle, setPageTitle, pageDescription, setPageDescription }) => {
  const generateHead = new GenerateHTML();
  return(
    <div className="h-full w-full">
      <PageTitle title="ページ情報設定" />
      <SettingTitle
        headingTitle="ページタイトル"
        description={headingDescriptions.title}
      />
      <SettingWindow
        value={pageTitle}
        setValue={setPageTitle}
        placeholder="(例) 私のホームページ"
      />
      <SettingTitle
        headingTitle="ページ説明"
        description={headingDescriptions.description}
      />
      <SettingWindow
        value={pageDescription}
        setValue={setPageDescription}
        placeholder="(例) 私のことを知ってください"
      />
      <SettingTitle
        headingTitle="文字エンコーディング"
        description={headingDescriptions.charset}
      />
      <DisabledValue value="utf-8" />
      <SettingTitle
        headingTitle="head部のコード"
        description={headingDescriptions.head}
      />
      <div className="border border-black p-1 my-3 whitespace-pre-wrap dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300">
        {generateHead.generateHead(pageTitle, pageDescription)}
      </div>
    </div>
  );
}

export default BasicSetting;

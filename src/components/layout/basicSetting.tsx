import { FC } from "react";
import { HeadCodeUtility } from "@/utils/headCodeUtility";
import { HeadData, HeadDataState } from "@/types/headData";
import { headingDescriptions } from "@/data/descriptionData";
import DisabledValue from "@/components/input/disabledValue";
import PageTitle from "@/components/headings/pageTitle";
import SettingTitle from "@/components/headings/settingTitle";
import SettingWindow from "@/components/input/settingWindow";

type Head = HeadData & HeadDataState;

const BasicSetting: FC<Head> = ({ pageTitle, setPageTitle, pageDescription, setPageDescription }) => {
  const head = new HeadCodeUtility(pageTitle, pageDescription);
  
  return(
    <div className="h-full w-full">
      <PageTitle title="ページ情報設定" />
      <SettingTitle
        title="ページタイトル"
        description={headingDescriptions.title}
      />
      <SettingWindow
        value={pageTitle}
        setValue={setPageTitle}
        placeholder="(例) 私のホームページ"
      />
      <SettingTitle
        title="ページ説明"
        description={headingDescriptions.description}
      />
      <SettingWindow
        value={pageDescription}
        setValue={setPageDescription}
        placeholder="(例) 私のことを知ってください"
      />
      <SettingTitle
        title="文字エンコーディング"
        description={headingDescriptions.charset}
      />
      <DisabledValue value="utf-8" />
      <SettingTitle
        title="head部のコード"
        description={headingDescriptions.head}
      />
      <div className="border border-black p-1 my-3 whitespace-pre-wrap">
        {head.createElement()}
      </div>
    </div>
  );
}

export default BasicSetting;

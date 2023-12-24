import { FC } from "react";
import { HeadCodeUtility } from "@/utils/headCodeUtility";
import { HeadData, HeadDataState } from "@/types/headData";
import { headingDescriptions } from "@/data/descriptionData";
import DisabledInputWindow from "@/components/input/disabledInputWindow";
import ExampleArea from "@/components/area/exampleArea";
import InputWindow from "@/components/input/inputWindow";
import PageTitle from "@/components/headings/pageTitle";
import SettingTitle from "@/components/headings/settingTitle";

type Head = HeadData & HeadDataState;

const BasicSetting: FC<Head> = ({ pageTitle, setPageTitle, pageDescription, setPageDescription }) => {
  const head = new HeadCodeUtility(pageTitle, pageDescription);
  
  return(
    <div className="h-full w-full">
      <PageTitle title="ページ情報設定" />
      <div className="my-4">
        <SettingTitle
          title="ページタイトル"
          description={headingDescriptions.title}
        />
        <InputWindow
          value={pageTitle}
          setValue={setPageTitle}
          placeholder="(例) 私のホームページ"
        />
      </div>
      <div className="my-4">
        <SettingTitle
          title="ページ説明"
          description={headingDescriptions.description}
        />
        <InputWindow
          value={pageDescription}
          setValue={setPageDescription}
          placeholder="(例) 私のことを知ってください"
        />
      </div>
      <div className="my-4">
        <SettingTitle
          title="文字エンコーディング"
          description={headingDescriptions.charset}
        />
        <DisabledInputWindow value="utf-8" />
      </div>
      <div className="my-4">
        <SettingTitle
          title="head部のコード"
          description={headingDescriptions.head}
        />
        <ExampleArea
          code={head.createElement()}
        />
      </div>
    </div>
  );
}

export default BasicSetting;

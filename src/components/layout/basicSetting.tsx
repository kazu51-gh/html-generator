import { Dispatch, FC, SetStateAction } from "react";
import { HeadCodeUtility } from "@/utils/headCodeUtility";
import { headingDescriptions } from "@/data/descriptionData";
import DisabledValue from "@/components/input/disabledValue";
import PageTitle from "@/components/headings/pageTitle";
import SettingTitle from "@/components/headings/settingTitle";
import SettingWindow from "@/components/input/settingWindow";

type Props = {
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
  pageDescription: string;
  setPageDescription: Dispatch<SetStateAction<string>>;
}

const BasicSetting: FC<Props> = ({ pageTitle, setPageTitle, pageDescription, setPageDescription }) => {
  const head = new HeadCodeUtility(pageTitle, pageDescription);
  
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
      <div className="border border-black p-1 my-3 whitespace-pre-wrap">
        {head.createElement()}
      </div>
    </div>
  );
}

export default BasicSetting;

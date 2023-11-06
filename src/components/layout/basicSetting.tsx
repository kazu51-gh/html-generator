import { Dispatch, FC, SetStateAction } from "react";
import { descriptions } from "@/data/headData";
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
  return(
    <div className="h-full w-full">
      <PageTitle title="ページ情報設定" />
      <div className="mb-3">
        <SettingTitle
          headingTitle="ページタイトル"
          description={descriptions.title}
        />
        <SettingWindow
          value={pageTitle}
          setValue={setPageTitle}
          placeholder="(例) 私のホームページ"
        />
      </div>
      <div className="mb-3">
        <SettingTitle
          headingTitle="ページ説明"
          description={descriptions.description}
        />
        <SettingWindow
          value={pageDescription}
          setValue={setPageDescription}
          placeholder="(例) 私のことを知ってください"
        />
      </div>
      <div className="mb-3">
        <SettingTitle
          headingTitle="文字エンコーディング"
          description={descriptions.charset}
        />
        <DisabledValue value="utf-8" />
      </div>
    </div>
  );
}

export default BasicSetting;

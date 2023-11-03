import { Dispatch, FC, SetStateAction } from "react";
import Setting from "@/components/input/pageSetting/setting";
import PageTitle from "@/components/headings/pageTitle";

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
      <Setting
        setSetting={setPageTitle}
        placeholder="(例) 私のホームページ"
        value={pageTitle}
        headingTitle="ページタイトル"
      />
      <Setting
        setSetting={setPageDescription}
        placeholder="(例) 私のことを知ってください。"
        value={pageDescription}
        headingTitle="ページ説明"
      />
    </div>
  );
}

export default BasicSetting;
import { Dispatch, FC, SetStateAction } from "react";
import SettingWindow from "@/components/input/pageSetting/settingWindow";
import SettingTitle from "@/components/input/pageSetting/settingTitle";

type Props = {
  setSetting: Dispatch<SetStateAction<string>>;
  placeholder: string;
  value: string;
  headingTitle: string;
}

const Setting: FC<Props> = ({ setSetting, placeholder, value, headingTitle }) => {
  return(
    <div className="my-3">
      <SettingTitle
        headingTitle={headingTitle}
      />
      <SettingWindow
        setSetting={setSetting}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default Setting;

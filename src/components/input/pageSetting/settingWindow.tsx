import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setSetting: Dispatch<SetStateAction<string>>;
  placeholder: string;
  value: string;
}

const SettingWindow: FC<Props> = ({ setSetting, placeholder, value }) => {
  return(
    <input
      className="border border-black px-3 py-1.5 rounded text-lg w-1/2 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
      onChange={(e) => setSetting(e.target.value)}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

export default SettingWindow;

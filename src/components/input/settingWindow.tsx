import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const SettingWindow: FC<Props> = ({ value, setValue, placeholder }) => {
  return(
    <input
      className="border border-black my-3 p-1.5 rounded text-lg w-1/2 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

export default SettingWindow;

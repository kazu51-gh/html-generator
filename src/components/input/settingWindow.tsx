import { FC } from "react";
import { InputWindow } from "@/types/inputWindow";

const SettingWindow: FC<InputWindow> = ({ value, setValue, placeholder }) => {
  return(
    <input className="border border-black my-3 p-1.5 rounded text-lg w-1/2"
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

export default SettingWindow;

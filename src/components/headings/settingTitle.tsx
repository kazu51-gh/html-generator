import { FC } from "react";
import { Introduction } from "@/types/introduction";

const SettingTitle: FC<Introduction> = ({ title, description }) => {
  return(
    <div className="w-full">
      <h3 className="text-xl">{title}</h3>
      <p className="text-sm text-[#9CA3AF]">{description}</p>
    </div>
  );
}

export default SettingTitle;

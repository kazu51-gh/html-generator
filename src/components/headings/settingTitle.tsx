import { FC } from "react";

type Props = {
  headingTitle: string;
  description: string;
}

const SettingTitle: FC<Props> = ({ headingTitle, description }) => {
  return(
    <div className="w-full">
      <h3 className="text-xl">{headingTitle}</h3>
      <p className="text-sm text-[#9CA3AF]">{description}</p>
    </div>
  );
}

export default SettingTitle;

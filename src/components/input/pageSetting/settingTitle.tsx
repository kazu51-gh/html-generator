import { FC } from "react";

type Props = {
  headingTitle: string;
}

const SettingTitle: FC<Props> = ({ headingTitle }) => {
  return(
    <div className="flex">
      <h3 className="my-3 mr-2 text-xl">{headingTitle}</h3>
      <div className="border border-black cursor-pointer leading-[14px] my-[18px] text-center text-sm rounded-full h-4 w-4 dark:border-white">i</div>
    </div>
  );
}

export default SettingTitle;

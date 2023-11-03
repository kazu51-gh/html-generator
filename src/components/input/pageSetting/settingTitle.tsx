import { FC } from "react";

type Props = {
  headingTitle: string;
}

const SettingTitle: FC<Props> = ({ headingTitle }) => {
  return(
    <div className="flex flex-row items-center w-full">
      <h3 className="text-xl mb-2">{headingTitle}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
        className="cursor-pointer mb-2"
      >
        <circle cx="14" cy="14" r="7" fill="white" stroke="black" />
        <text x="12" y="19" font-size="12" font-family="inherit">i</text>
      </svg>
    </div>
  );
}

export default SettingTitle;

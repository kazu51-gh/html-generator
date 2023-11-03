import { FC } from "react";

type Props = {
  title: string;
}

const PageTitle: FC<Props> = ({ title }) => {
  return(
    <div className="flex flex-row items-center w-full">
      <h2 className="text-2xl">{title}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="10" fill="white" stroke="black" />
        <text x="8" y="22" font-size="16" font-family="inherit">？</text>
      </svg>
    </div>
  );
}

export default PageTitle;

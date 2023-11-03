import { FC } from "react";

type Props = {
  title: string;
}

const PageTitle: FC<Props> = ({ title }) => {
  return(
    <div className="flex w-full">
      <h2 className="my-3 mr-2 text-2xl">{title}</h2>
      <div className="border border-black cursor-pointer leading-[14px] my-5 text-center text-sm rounded-full h-4 w-4 dark:border-white">?</div>
    </div>
  );
}

export default PageTitle;

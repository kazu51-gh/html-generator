import { FC } from "react";

const PageTitle: FC<{ title: string }> = ({ title }) => {
  return(
    <h2 className="text-2xl my-4">
      {title}
    </h2>
  );
}

export default PageTitle;

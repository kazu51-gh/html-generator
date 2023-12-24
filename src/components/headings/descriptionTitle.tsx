import { FC } from "react";

const DescriptionTitle: FC<{ title: string }> = ({ title }) => {
  return(
    <h3 className="text-lg">
      {title}
    </h3>
  );
}

export default DescriptionTitle;

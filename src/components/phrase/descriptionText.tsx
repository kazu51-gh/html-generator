import { FC } from "react";

const DescriptionText: FC<{ text: string }> = ({ text }) => {
  return(
    <p className="text-base my-2">
      {text}
    </p>
  );
}

export default DescriptionText;

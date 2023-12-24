import { FC } from "react";

const NormalText: FC<{ text: string }> = ({ text }) => {
  return(
    <p className="text-base">
      {text}
    </p>
  );
}

export default NormalText;

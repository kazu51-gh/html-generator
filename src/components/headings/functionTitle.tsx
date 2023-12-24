import { FC } from "react";
import { Introduction } from "@/types/introduction";

const FunctionTitle: FC<Introduction> = ({ title, description }) => {
  return(
    <div className="my-6">
      <h3 className="text-xl m-1">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}

export default FunctionTitle;

import { FC } from "react";
import { Introduction } from "@/types/introduction";

const FunctionDescription: FC<Introduction> = ({ title, description }) => {
  return(
    <div className="mb-6">
      <h3 className="text-xl mb-1">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}

export default FunctionDescription;

import { FC } from "react";

type Props = {
  title: string;
  description: string;
}

const FunctionDescription: FC<Props> = ({ title, description }) => {
  return(
    <div className="mb-6">
      <h3 className="text-xl mb-1">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}

export default FunctionDescription;

import { FC } from "react";

const RadioLabel: FC<{ htmlFor: string }> = ({ htmlFor }) => {
  return(
    <label className="ml-1"
      htmlFor={htmlFor}
    >
      {htmlFor}
    </label>
  );
}

export default RadioLabel;

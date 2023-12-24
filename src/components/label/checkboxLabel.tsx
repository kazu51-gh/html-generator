import { FC } from "react";

const CheckboxLabel: FC<{ tagName: string, attribute: string }> = ({ tagName, attribute }) => {
  return(
    <label
      htmlFor={`${tagName}-${attribute}`}
    >
      {attribute}
    </label>
  );
}

export default CheckboxLabel;

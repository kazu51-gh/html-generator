import { FC } from "react";

type Props = {
  value: string;
}

const DisabledValue: FC<Props> = ({ value }) => {
  return(
    <input
      className="border border-black my-3 p-1.5 rounded text-lg w-1/2"
      type="text"
      value={value}
      disabled
    />
  );
}

export default DisabledValue;

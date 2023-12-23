import { DisabledInputWindow } from "@/types/inputWindow";
import { FC } from "react";

const DisabledValue: FC<DisabledInputWindow> = ({ value }) => {
  return(
    <input className="border border-black my-3 p-1.5 rounded text-lg w-1/2"
      type="text"
      value={value}
      disabled
    />
  );
}

export default DisabledValue;

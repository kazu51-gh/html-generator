import { DisabledWindow } from "@/types/inputWindow";
import { FC } from "react";

const DisabledInputWindow: FC<DisabledWindow> = ({ value }) => {
  return(
    <input className="border border-black p-1 rounded text-lg w-1/2"
      type="text"
      value={value}
      disabled
    />
  );
}

export default DisabledInputWindow;

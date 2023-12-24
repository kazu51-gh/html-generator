import { FC } from "react";
import { Window } from "@/types/inputWindow";

const InputWindow: FC<Window> = ({ value, setValue, placeholder }) => {
  return(
    <input className="border border-black p-1 rounded text-lg w-1/2"
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

export default InputWindow;

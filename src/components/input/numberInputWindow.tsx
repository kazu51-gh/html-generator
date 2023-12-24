import { FC } from "react";
import { SetNumber } from "@/types/setNumber";

const NumberInputWindow: FC<SetNumber> = ({ setFunction }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value);

    if (number >= 1) { setFunction(number); }
    else { setFunction(1); }
  }

  return(
    <input className="border border-black rounded pl-1 w-10"
      defaultValue={1}
      min={1}
      onChange={(e) => handleChange(e)}
      required
      type="number"
    />
  );
}

export default NumberInputWindow;

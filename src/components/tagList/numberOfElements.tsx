import { FC } from "react";
import { SetNumber } from "@/types/setNumber";

const NumberOfElements:FC<SetNumber> = ({ title, setFunction }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value);
    if (number >= 1) {
      setFunction(number);
    } else {
      setFunction(1);
    }
  }

  return(
    <div className="flex my-2">
      <p>{title}：</p>
      <input
        className="border border-black px-1 w-12 rounded"
        defaultValue={1}
        min={1}
        onChange={(e) => handleChange(e)}
        required
        type="number"
      />
    </div>
  );
}

export default NumberOfElements;

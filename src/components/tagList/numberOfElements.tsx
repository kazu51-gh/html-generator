import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  title: string;
  setFunction: Dispatch<SetStateAction<number>>;
}

const NumberOfElements:FC<Props> = ({ title, setFunction }) => {
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
        className="border border-black px-1 w-12 rounded dark:bg-gray-500 dark:border-gray-300 dark:text-gray-300"
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

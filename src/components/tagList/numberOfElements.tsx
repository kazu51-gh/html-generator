import { Dispatch, FC, SetStateAction, useState } from "react";

type Props = {
  title: string;
  setFunction: Dispatch<SetStateAction<number>>;
}

const NumberOfElements:FC<Props> = ({title, setFunction}) => {
  return(
    <div className="flex my-2">
      <p>{title}：</p>
      <input
        className="border border-black px-1 w-12"
        defaultValue={1}
        min={1}
        onChange={(e) => setFunction(parseInt(e.target.value))}
        required
        type="number"
      />
    </div>
  );
}

export default NumberOfElements;

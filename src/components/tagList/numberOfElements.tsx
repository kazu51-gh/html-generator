import { FC } from "react";
import { SetNumberFunction } from "@/types/setFunction";
import NumberInputWindow from "@/components/input/numberInputWindow";

type SetNumber = SetNumberFunction & {
  title: string;
}

const NumberOfElements: FC<SetNumber> = ({ title, setFunction }) => {
  return(
    <div className="flex my-2">
      <p>{title}<span className="px-1">:</span></p>
      <NumberInputWindow
        setFunction={setFunction}
      />
    </div>
  );
}

export default NumberOfElements;

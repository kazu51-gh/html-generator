import { FC } from "react";
import { Radio } from "@/types/radio";

const SelectHeading: FC<Radio> = ({tagList, radioValue, setRadioValue}) => {
  return(
    <div className="flex justify-evenly m-1 w-full">
      {tagList.map((tag) =>
        <div key={tag} className="flex">
          <input
            id={tag}
            className="mr-1"
            type="radio"
            value={tag}
            checked={tag === radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
          />
          <label htmlFor={tag}>
            {tag}
          </label>
        </div>
      )}
    </div>
  );
}

export default SelectHeading;

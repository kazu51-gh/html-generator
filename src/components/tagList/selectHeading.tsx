import { FC } from "react";
import { RadioValue } from "@/types/radio";
import HTagRadio from "@/components/input/hTagRadio";
import RadioLabel from "@/components/label/radioLabel";

type Radio = RadioValue & {
  tagList: string[];
}

const SelectHeading: FC<Radio> = ({ tagList, radioValue, setRadioValue }) => {
  return(
    <div className="flex justify-evenly m-1 w-full">
      {tagList.map(tag =>
        <div key={tag} className="flex">
          <HTagRadio
            tagName={tag}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          />
          <RadioLabel htmlFor={tag} />
        </div>
      )}
    </div>
  );
}

export default SelectHeading;

import { FC } from "react";
import { RadioValue } from "@/types/radio";

type Radio = RadioValue & {
  tagName: string;
}

const HTagRadio: FC<Radio> = ({ tagName, radioValue, setRadioValue }) => {

  return(
    <input
      id={tagName}
      type="radio"
      value={tagName}
      checked={tagName === radioValue}
      onChange={(e) => setRadioValue(e.target.value)}
    />
  );
}

export default HTagRadio;

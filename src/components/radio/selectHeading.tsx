import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  tagList: string[];
  radioValue: string;
  setRadioValue: Dispatch<SetStateAction<string>>;
}

const SelectHeading: FC<Props> = ({tagList, radioValue, setRadioValue}) => {
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

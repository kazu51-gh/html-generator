import { Dispatch, SetStateAction } from "react";

export type Radio = {
  tagList: string[];
  radioValue: string;
  setRadioValue: Dispatch<SetStateAction<string>>;
}

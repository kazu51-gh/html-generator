import { Dispatch, SetStateAction } from "react";

export type RadioValue = {
  radioValue: string;
  setRadioValue: Dispatch<SetStateAction<string>>;
}

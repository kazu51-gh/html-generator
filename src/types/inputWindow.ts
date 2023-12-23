import { Dispatch, SetStateAction } from "react";

export type InputWindow = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

export type DisabledInputWindow = {
  value: string;
}

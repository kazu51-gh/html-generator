import { Dispatch, SetStateAction } from "react";

export type Window = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

export type DisabledWindow = {
  value: string;
}

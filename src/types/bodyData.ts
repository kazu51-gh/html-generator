import { Dispatch, SetStateAction } from "react";

export type BodyData = {
  textareaData: string;
}

export type BodyDataState = {
  setTextareaData: Dispatch<SetStateAction<string>>;
}

import { Dispatch, SetStateAction } from "react";

export type CheckedAttributes = {
  tagName: string;
  checkedAttributes: string[];
  setCheckedAttributes: Dispatch<SetStateAction<string[]>>;
}

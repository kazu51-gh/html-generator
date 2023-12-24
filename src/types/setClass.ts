import { Dispatch, SetStateAction } from "react";

export type SetClass = {
  setTagClass: Dispatch<SetStateAction<string>>;
  setClassError: Dispatch<SetStateAction<string>>;
}

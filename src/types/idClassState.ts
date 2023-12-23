import { Dispatch, SetStateAction } from "react";

export type IdClassState = {
  setTagId: Dispatch<SetStateAction<string>>;
  setTagClass: Dispatch<SetStateAction<string>>;
}

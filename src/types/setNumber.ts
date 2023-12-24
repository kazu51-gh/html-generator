import { Dispatch, SetStateAction } from "react";

export type SetNumber = {
  setFunction: Dispatch<SetStateAction<number>>;
}

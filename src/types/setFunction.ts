import { Dispatch, SetStateAction } from "react";

export type SetNumberFunction = {
  setFunction: Dispatch<SetStateAction<number>>;
}

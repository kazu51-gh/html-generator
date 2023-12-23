import { Dispatch, SetStateAction } from "react";

export type SetNumber = {
  title: string;
  setFunction: Dispatch<SetStateAction<number>>;
}

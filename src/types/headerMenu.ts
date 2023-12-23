import { Dispatch, SetStateAction } from "react";

export type HeaderMenu = {
  listName: string;
  viewName: string;
  setCurrentView: Dispatch<SetStateAction<string>>;
}

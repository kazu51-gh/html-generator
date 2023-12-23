import { Dispatch, SetStateAction } from "react";

export type View = {
  currentView: string;
}

export type ViewState = {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

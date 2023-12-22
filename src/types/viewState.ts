import { Dispatch, SetStateAction } from "react";

export type ViewState = {
  currentView: string;
  setCurrentView: Dispatch<SetStateAction<string>>;
}

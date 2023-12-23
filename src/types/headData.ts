import { Dispatch, SetStateAction } from "react";

export type HeadData = {
  pageTitle: string;
  pageDescription: string;
}

export type HeadDataState = {
  setPageTitle: Dispatch<SetStateAction<string>>;
  setPageDescription: Dispatch<SetStateAction<string>>;
}

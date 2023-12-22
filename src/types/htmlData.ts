import { Dispatch, SetStateAction } from "react";

export type HeadData = {
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
  pageDescription: string;
  setPageDescription: Dispatch<SetStateAction<string>>;
}

export type BodyData = {
  textareaData: string;
  setTextareaData: Dispatch<SetStateAction<string>>;
}

export type HTMLDocumentData = {
  pageTitle: string;
  setPageTitle?: Dispatch<SetStateAction<string>>;
  pageDescription: string;
  setPageDescription?: Dispatch<SetStateAction<string>>;
  textareaData: string;
  setTextareaData?: Dispatch<SetStateAction<string>>;
}

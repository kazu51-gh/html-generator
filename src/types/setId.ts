import { Dispatch, SetStateAction } from "react";

export type SetId = {
  setTagId: Dispatch<SetStateAction<string>>;
  setIdError: Dispatch<SetStateAction<string>>;
}

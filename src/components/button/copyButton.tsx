import { CodeUtility } from "@/utils/codeUtility";
import { FC } from "react";

const CopyButton: FC<{ code: string }> = ({ code }) => {
  return(
    <button className="block border border-black p-1 mx-auto rounded text-lg"
      onClick={() => CodeUtility.copyCode(code)}
      type="button"
    >
      コードをコピー
    </button>
  );
}

export default CopyButton;

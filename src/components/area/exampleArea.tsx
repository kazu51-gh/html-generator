import { FC } from "react";
import NormalText from "@/components/phrase/normalText";

const ExampleArea: FC<{ code: string }> = ({ code }) => {
  return(
    <div className="border border-black p-1 rounded whitespace-pre-wrap">
      <NormalText text={code} />
    </div>
  );
}

export default ExampleArea;

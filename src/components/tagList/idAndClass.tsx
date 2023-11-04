import { Dispatch, FC, SetStateAction } from "react";
import IdAndClassInput from "@/components/input/idAndClassInput";
import InputLabelW15 from "@/components/labels/inputLabelW15";

type Props = {
  setTagId: Dispatch<SetStateAction<string>>;
  setTagClass: Dispatch<SetStateAction<string>>;
}

const IdAndClass:FC<Props> = ({ setTagId, setTagClass }) => {

  return(
    <div className="w-full">
      <div className="flex flex-row mb-1">
        <InputLabelW15 labelTitle="id" />
        <IdAndClassInput setState={setTagId} />
      </div>
      <div className="flex flex-row mb-1">
        <InputLabelW15 labelTitle="class" />
        <IdAndClassInput setState={setTagClass} />
      </div>
    </div>
  );
}

export default IdAndClass;

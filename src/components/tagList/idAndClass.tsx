import { FC, useState } from "react";
import { headingDescriptions } from "@/data/descriptionData";
import { IdClassState } from "@/types/idClassState";
import ClassInputWindow from "@/components/input/classInputWindow";
import IdInputWindow from "@/components/input/idInputWindow";
import SettingTitle from "@/components/headings/settingTitle";

const IdAndClass: FC<IdClassState> = ({ setTagId, setTagClass }) => {
  const [idError, setIdError] = useState<string>('');
  const [classError, setClassError] = useState<string>('');

  return(
    <div>
      <div className="my-2">
        <SettingTitle
          title="id"
          description={headingDescriptions.id}
        />
        <IdInputWindow
          setTagId={setTagId}
          setIdError={setIdError}
        />
        {idError !== '' && <p className="text-xs text-red-500 my-1">{idError}</p>}
      </div>
      <div className="my-2">
        <SettingTitle
          title="class"
          description={headingDescriptions.class}
        />
        <ClassInputWindow
          setTagClass={setTagClass}
          setClassError={setClassError}
        />
        {classError !== '' && <p className="text-xs text-red-500 my-1">{classError}</p>}
      </div>
    </div>
  );
}

export default IdAndClass;

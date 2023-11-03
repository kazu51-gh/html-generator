import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setTagId: Dispatch<SetStateAction<string>>;
  setTagClass: Dispatch<SetStateAction<string>>;
}

const IdAndClass:FC<Props> = ({ setTagId, setTagClass }) => {

  return(
    <div className="w-full">
      <div className="flex flex-row mb-1">
        <label className="block w-[15%] text-center">id</label>
        <input
          className="border border-black px-1 rounded w-1/2 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
          onChange={(e) => setTagId(e.target.value)}
        />
      </div>
      <div className="flex flex-row mb-1">
        <label className="block w-[15%] text-center">class</label>
        <input
          className="border border-black px-1 rounded w-1/2 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
          onChange={(e) => setTagClass(e.target.value)}
        />
      </div>
    </div>
  );
}

export default IdAndClass;

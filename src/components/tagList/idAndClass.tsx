import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setTagId: Dispatch<SetStateAction<string>>;
  setTagClass: Dispatch<SetStateAction<string>>;
}

const IdAndClass:FC<Props> = ({ setTagId, setTagClass }) => {

  return(
    <div className="flex my-3">
      <div className="flex-1">
        <div className="flex w-full">
          <label className="mr-1">id :</label>
          <input
            className="border border-black px-1 rounded w-3/4 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
            onChange={(e) => setTagId(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex w-full">
          <label className="mr-1">class :</label>
          <input
            className="border border-black px-1 rounded w-3/4 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
            onChange={(e) => setTagClass(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default IdAndClass;

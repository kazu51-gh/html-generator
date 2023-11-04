import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setState: Dispatch<SetStateAction<string>>;
}

const IdAndClassInput: FC<Props> = ({ setState }) => {
  return(
    <input
      className="border border-black px-1 rounded w-1/2 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export default IdAndClassInput;

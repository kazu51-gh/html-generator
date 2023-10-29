import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  label: string;
  setContent: Dispatch<SetStateAction<string>>;
}

const SetContent: FC<Props> = ({ label, setContent }) => {
  return(
    <div className="flex my-3">
      <label className="mr-1">{label} :</label>
      <input
        className="border border-black px-1 rounded w-1/2 dark:bg-gray-500 dark:border-gray-300 dark:text-gray-300"
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}

export default SetContent;

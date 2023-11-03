import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  listTitle: string;
  current: string;
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const HeaderList:FC<Props> = ({ listTitle, current, setCurrentView }) => {
  return(
    <li
      className="cursor-pointer font-medium text-lg max-[767px]:text-xs mx-5"
      onClick={() => setCurrentView(current)}
    >
      {listTitle}
    </li>
  );
}

export default HeaderList;

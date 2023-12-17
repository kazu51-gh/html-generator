import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  listName: string;
  viewName: string;
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const HeaderList: FC<Props> = ({ listName, viewName, setCurrentView }) => {
  return (
    <li
      className="page-list max-[767px]:text-xs"
      onClick={() => setCurrentView(viewName)}
    >
      {listName}
    </li>
  )
}

export default HeaderList;

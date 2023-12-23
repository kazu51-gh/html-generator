import { FC } from "react";
import { HeaderMenu } from "@/types/headerMenu";

const HeaderList: FC<HeaderMenu> = ({ listName, viewName, setCurrentView }) => {
  return (
    <li className="page-list max-[767px]:text-xs"
      onClick={() => setCurrentView(viewName)}
    >
      {listName}
    </li>
  );
}

export default HeaderList;

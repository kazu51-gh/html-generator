import { FC } from "react";
import { basePath } from "../../../../next.config";
import path from "path";

type Props = {
  mainTitle: string;
}

const BASE_PATH = basePath ? basePath : "";

const HeaderTitle: FC<Props> = ({ mainTitle }) => {
  return(
    <a
      className="cursor-pointer flex font-medium items-center mb-4 md:mb-0 text-xl"
      href={path.join(BASE_PATH, '/')}
    >
      {mainTitle}
    </a>
  );
}

export default HeaderTitle;

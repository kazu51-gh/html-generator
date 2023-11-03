import { basePath } from "../../../next.config";
import path from "path";

const BASE_PATH = basePath ? basePath : "";

const HeaderTitle = () => {
  return(
    <a
      className="cursor-pointer font-medium text-2xl"
      href={path.join(BASE_PATH, '/')}
    >
      HTML Generator
    </a>
  );
}

export default HeaderTitle;

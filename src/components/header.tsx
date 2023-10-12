import { Dispatch, FC, SetStateAction } from "react";
import path from "path";
import { basePath } from "../../next.config";

const BASE_PATH = basePath ? basePath : "";

type Props = {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const Header: FC<Props> = ({ setCurrentView }) => {
  return (
    <header>
      <div className="container flex flex-wrap flex-col md:flex-row items-center mx-auto p-5">
        <a
          className="cursor-pointer flex font-medium items-center mb-4 md:mb-0 text-xl"
          href={path.join(BASE_PATH, '/')}
        >
          HTML Generator
        </a>
        <ul className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <li
            className="cursor-pointer mx-5"
            onClick={() => setCurrentView('page-setting')}
          >
            基本情報
          </li>
          <li
            className="cursor-pointer mx-5"
            onClick={() => setCurrentView('tag-lists')}
          >
            タグ一覧
          </li>
          <li
            className="cursor-pointer mx-5"
            onClick={() => setCurrentView('viewer')}
          >
            プレビュー
          </li>
          <li
            className="cursor-pointer mx-5"
            onClick={() => setCurrentView('html-download')}
          >
            ダウンロード
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

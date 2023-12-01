import { Dispatch, FC, SetStateAction } from "react";
import { basePath } from "../../../next.config";
import path from "path";

const BASE_PATH = basePath ? basePath : "";

type Props = {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const Header: FC<Props> = ({ setCurrentView }) => {
  return(
    <div className="items-center flex flex-row max-[767px]:flex-col max-[767px]:justify-around min-[768px]:justify-between m-3">
      <a
        className="cursor-pointer font-medium text-2xl"
        href={path.join(BASE_PATH, '/')}
      >HTML Generator</a>
      <ul className="flex flex-row max-[767px]:my-2">
        <li
          className="page-list max-[767px]:text-xs mx-5"
          onClick={() => setCurrentView('home')}
        >
          HOME
        </li>
        <li
          className="page-list max-[767px]:text-xs mx-5"
          onClick={() => setCurrentView('page-setting')}
        >
          ページ情報設定
        </li>
        <li
          className="page-list max-[767px]:text-xs mx-5"
          onClick={() => setCurrentView('element-list')}
        >
          HTML要素一覧
        </li>
        <li
          className="page-list max-[767px]:text-xs mx-5"
          onClick={() => setCurrentView('viewer')}
        >
          プレビュー
        </li>
        <li
          className="page-list max-[767px]:text-xs mx-5"
          onClick={() => setCurrentView('html-download')}
        >
          ダウンロード
        </li>
      </ul>
    </div>
  );
}

export default Header;

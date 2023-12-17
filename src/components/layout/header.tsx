import { Dispatch, FC, SetStateAction } from "react";
import { basePath } from "../../../next.config";
import HeaderList from "@/components/list/headerList";
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
        <HeaderList
          listName="HOME"
          viewName="home"
          setCurrentView={setCurrentView}
        />
        <HeaderList
          listName="ページ情報設定"
          viewName="page-setting"
          setCurrentView={setCurrentView}
        />
        <HeaderList
          listName="HTML要素一覧"
          viewName="element-list"
          setCurrentView={setCurrentView}
        />
        <HeaderList
          listName="プレビュー"
          viewName="viewer"
          setCurrentView={setCurrentView}
        />
        <HeaderList
          listName="ダウンロード"
          viewName="html-download"
          setCurrentView={setCurrentView}
        />
      </ul>
    </div>
  );
}

export default Header;

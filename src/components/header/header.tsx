import { Dispatch, FC, SetStateAction } from "react";
import HeaderList from "@/components/header/headerList";
import HeaderTitle from "@/components/header/headerTitle";

type Props = {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const Header: FC<Props> = ({ setCurrentView }) => {
  return(
    <header>
      <div className="container flex flex-wrap flex-col md:flex-row items-center mx-auto p-5">
        <HeaderTitle mainTitle='HTML Generator' />
        <ul className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <HeaderList listTitle='基本情報' current='page-setting' setCurrentView={setCurrentView} />
          <HeaderList listTitle='タグ一覧' current='tag-lists' setCurrentView={setCurrentView} />
          <HeaderList listTitle='プレビュー' current='viewer' setCurrentView={setCurrentView} />
          <HeaderList listTitle='ダウンロード' current='html-download' setCurrentView={setCurrentView} />
        </ul>
      </div>
    </header>
  );
}

export default Header;

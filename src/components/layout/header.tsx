import { Dispatch, FC, SetStateAction } from "react";
import HeaderList from "@/components/header/headerList";
import HeaderTitle from "@/components/header/headerTitle";

type Props = {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const Header: FC<Props> = ({ setCurrentView }) => {
  return(
    <div className="h-full items-center flex flex-row max-[767px]:flex-col max-[767px]:justify-around min-[768px]:justify-between mx-3">
      <HeaderTitle />
      <ul className="flex flex-row items-center">
        <HeaderList listTitle='基本情報' current='page-setting' setCurrentView={setCurrentView} />
        <HeaderList listTitle='タグ一覧' current='tag-lists' setCurrentView={setCurrentView} />
        <HeaderList listTitle='プレビュー' current='viewer' setCurrentView={setCurrentView} />
        <HeaderList listTitle='ダウンロード' current='html-download' setCurrentView={setCurrentView} />
      </ul>
    </div>
  );
}

export default Header;

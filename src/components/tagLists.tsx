import Accordion from "./accordion";
import { basePath } from "../../next.config";
import path from "path";

const BASE_PATH = basePath ? basePath : '';

const TagLists = () => {
  return(
    <div className="h-screen">
      <div className="flex">
        <h2 className="mr-2 text-2xl">タグ一覧</h2>
        <div className="flex items-center">
          <img
            alt="question_mark"
            className="cursor-pointer h-5 w-5"
            src={path.join(BASE_PATH, "question-mark.png")}
          />
        </div>
      </div>
      <div className="h-2/3 mt-4 overflow-y-scroll max-w-xl">
        <div className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <Accordion title="<h1> ~ <h6> : 見出し" description="xxx" />
          <Accordion title="<p> : 本文" description="xxx" />
          <Accordion title="<a> : リンク" description="xxx" />
          <Accordion title="<img> : 画像" description="xxx" />
          <Accordion title="<ul> : 順序なしの箇条書き" description="xxx" />
          <Accordion title="<ol> : 順序ありの箇条書き" description="xxx" />
          <Accordion title="<div> : ブロック要素のコンテナ" description="xxx" />
          <Accordion title="<span> : インライン要素のコンテナ" description="xxx" />
          <Accordion title="<br> : 改行" description="xxx" />
          <Accordion title="<hr> : 水平線" description="xxx" />
          <Accordion title="<strong> : 強調表示" description="xxx" />
          <Accordion title="<blockquote> : 引用" description="xxx" />
          <Accordion title="<code> : コード表示" description="xxx" />
          <Accordion title="<input> : 入力フォーム" description="xxx" />
          <Accordion title="<textarea> : テキストエリア" description="xxx" />
          <Accordion title="<button> : ボタン" description="xxx" />
          <Accordion title="<table> : テーブル" description="xxx" />
        </div>
      </div>
    </div>
  );
}

export default TagLists;

import Accordion from "./accordion";
import { basePath } from "../../next.config";
import path from "path";
import { tagDescription } from "@/tagDescription";

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
          <Accordion title="<h1> ~ <h6> : 見出し" description={tagDescription.h} />
          <Accordion title="<p> : 本文" description={tagDescription.p} />
          <Accordion title="<a> : リンク" description={tagDescription.a} />
          <Accordion title="<img> : 画像" description={tagDescription.img} />
          <Accordion title="<ul> : 順序なしの箇条書き" description={tagDescription.ul} />
          <Accordion title="<ol> : 順序ありの箇条書き" description={tagDescription.ol} />
          <Accordion title="<div> : ブロック要素のコンテナ" description={tagDescription.div} />
          <Accordion title="<span> : インライン要素のコンテナ" description={tagDescription.span} />
          <Accordion title="<br> : 改行" description={tagDescription.br} />
          <Accordion title="<hr> : 水平線" description={tagDescription.hr} />
          <Accordion title="<strong> : 強調表示" description={tagDescription.strong} />
          <Accordion title="<blockquote> : 引用" description={tagDescription.blockquote} />
          <Accordion title="<code> : コード表示" description={tagDescription.code} />
          <Accordion title="<input> : 入力フォーム" description={tagDescription.input} />
          <Accordion title="<textarea> : テキストエリア" description={tagDescription.textarea} />
          <Accordion title="<button> : ボタン" description={tagDescription.button} />
          <Accordion title="<table> : テーブル" description={tagDescription.table} />
        </div>
      </div>
    </div>
  );
}

export default TagLists;

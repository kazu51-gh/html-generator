import Accordion from "./accordion";
import { basePath } from "../../../next.config";
import path from "path";
import { tagDescription, tagList } from "@/tagData";

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
          <Accordion
            title="<h1> ~ <h6> : 見出し"
            description={tagDescription.h}
            required=""
            recommended=""
            tagList={tagList.h}
          />
          <Accordion
            title="<p> : 本文"
            description={tagDescription.p}
            required=""
            recommended=""
            tagList={tagList.p}
          />
          <Accordion
            title="<a> : リンク"
            description={tagDescription.a}
            required="必須属性 : href ･･･ ハイパーリンクが指す先のURLをここに指定します。"
            recommended=""
            tagList={tagList.a}
          />
          <Accordion
            title="<img> : 画像"
            description={tagDescription.img}
            required="必須属性 : src ･･･ Webページに挿入する画像へのパスを指定します。"
            recommended="推奨属性 : alt ･･･ 画像が読み込まれなかった場合の代替テキストを指定します。"
            tagList={tagList.img}
          />
          <Accordion
            title="<ul> : 順序なしの箇条書き"
            description={tagDescription.ul}
            required=""
            recommended=""
            tagList={tagList.ul}
          />
          <Accordion
            title="<ol> : 順序ありの箇条書き"
            description={tagDescription.ol}
            required=""
            recommended=""
            tagList={tagList.ol}
          />
          <Accordion
            title="<div> : ブロック要素のコンテナ"
            description={tagDescription.div}
            required=""
            recommended=""
            tagList={tagList.div}
          />
          <Accordion
            title="<span> : インライン要素のコンテナ"
            description={tagDescription.span}
            required=""
            recommended=""
            tagList={tagList.span}
          />
          <Accordion
            title="<br> : 改行"
            description={tagDescription.br}
            required=""
            recommended=""
            tagList={tagList.br}
          />
          <Accordion
            title="<hr> : 水平線"
            description={tagDescription.hr}
            required=""
            recommended=""
            tagList={tagList.hr}
          />
          <Accordion
            title="<strong> : 強調表示"
            description={tagDescription.strong}
            required=""
            recommended=""
            tagList={tagList.strong}
          />
          <Accordion
            title="<blockquote> : 引用"
            description={tagDescription.blockquote}
            required=""
            recommended="推奨属性 : cite ･･･ 引用元のURLや引用元の情報を指定します。"
            tagList={tagList.blockquote}
          />
          <Accordion
            title="<code> : コード表示"
            description={tagDescription.code}
            required=""
            recommended=""
            tagList={tagList.code}
          />
          <Accordion
            title="<input> : 入力フォーム"
            description={tagDescription.input}
            required=""
            recommended="推奨属性 : type ･･･ 表示する種類の型を指定します。未指定の場合は型がtextになります。"
            tagList={tagList.input}
          />
          <Accordion
            title="<textarea> : テキストエリア"
            description={tagDescription.textarea}
            required=""
            recommended="推奨属性 : row, col ･･･ テキストエリアの大きさを指定します。CSSを用いて大きさを指定することも出来ます。"
            tagList={tagList.textarea}
          />
          <Accordion
            title="<button> : ボタン"
            description={tagDescription.button}
            required=""
            recommended="推奨属性 : type ･･･ ボタンの既定の動作を指定します。type=submitのように指定し、submitはフォームのデータをサーバに送信、resetは初期値に初期化、buttonは既定の動作を定義しません。"
            tagList={tagList.button}
          />
          <Accordion
            title="<table> : テーブル"
            description={tagDescription.table}
            required=""
            recommended=""
            tagList={tagList.table}
          />
        </div>
      </div>
    </div>
  );
}

export default TagLists;

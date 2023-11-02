import Accordion from "@/components/tagList/accordion";
import { tagDescriptions, tagNames, tagTitles } from "@/data/tagData";
import PageTitle from "@/components/headings/pageTitle";

const TagLists = () => {
  return(
    <div className="h-screen">
      <PageTitle title="タグ一覧" />
      <div className="h-2/3 max-w-xl mx-1 my-2 overflow-y-scroll">
        <div className="bg-white border border-black divide-y divide-black rounded dark:bg-gray-700 dark:border-gray-500 dark:divide-gray-500 dark:text-gray-300">
          <Accordion
            title={tagTitles.h}
            description={tagDescriptions.h}
            required=""
            recommended=""
            tagList={tagNames.h}
          />
          <Accordion
            title={tagTitles.p}
            description={tagDescriptions.p}
            required=""
            recommended=""
            tagList={tagNames.p}
          />
          <Accordion
            title={tagTitles.a}
            description={tagDescriptions.a}
            required="必須属性 : href ･･･ ハイパーリンクが指す先のURLをここに指定します。"
            recommended=""
            tagList={tagNames.a}
          />
          <Accordion
            title={tagTitles.img}
            description={tagDescriptions.img}
            required="必須属性 : src ･･･ Webページに挿入する画像へのパスを指定します。"
            recommended="推奨属性 : alt ･･･ 画像が読み込まれなかった場合の代替テキストを指定します。"
            tagList={tagNames.img}
          />
          <Accordion
            title={tagTitles.ul}
            description={tagDescriptions.ul}
            required=""
            recommended=""
            tagList={tagNames.ul}
          />
          <Accordion
            title={tagTitles.ol}
            description={tagDescriptions.ol}
            required=""
            recommended=""
            tagList={tagNames.ol}
          />
          <Accordion
            title={tagTitles.div}
            description={tagDescriptions.div}
            required=""
            recommended=""
            tagList={tagNames.div}
          />
          <Accordion
            title={tagTitles.span}
            description={tagDescriptions.span}
            required=""
            recommended=""
            tagList={tagNames.span}
          />
          <Accordion
            title={tagTitles.br}
            description={tagDescriptions.br}
            required=""
            recommended=""
            tagList={tagNames.br}
          />
          <Accordion
            title={tagTitles.hr}
            description={tagDescriptions.hr}
            required=""
            recommended=""
            tagList={tagNames.hr}
          />
          <Accordion
            title={tagTitles.strong}
            description={tagDescriptions.strong}
            required=""
            recommended=""
            tagList={tagNames.strong}
          />
          <Accordion
            title={tagTitles.blockquote}
            description={tagDescriptions.blockquote}
            required=""
            recommended="推奨属性 : cite ･･･ 引用元のURLや引用元の情報を指定します。"
            tagList={tagNames.blockquote}
          />
          <Accordion
            title={tagTitles.code}
            description={tagDescriptions.code}
            required=""
            recommended=""
            tagList={tagNames.code}
          />
          <Accordion
            title={tagTitles.input}
            description={tagDescriptions.input}
            required=""
            recommended="推奨属性 : type ･･･ 表示する種類の型を指定します。未指定の場合は型がtextになります。"
            tagList={tagNames.input}
          />
          <Accordion
            title={tagTitles.textarea}
            description={tagDescriptions.textarea}
            required=""
            recommended="推奨属性 : rows, cols ･･･ テキストエリアの大きさを指定します。CSSを用いて大きさを指定することも出来ます。"
            tagList={tagNames.textarea}
          />
          <Accordion
            title={tagTitles.button}
            description={tagDescriptions.button}
            required=""
            recommended="推奨属性 : type ･･･ ボタンの既定の動作を指定します。type=submitのように指定し、submitはフォームのデータをサーバに送信、resetは初期値に初期化、buttonは既定の動作を定義しません。"
            tagList={tagNames.button}
          />
          <Accordion
            title={tagTitles.table}
            description={tagDescriptions.table}
            required=""
            recommended=""
            tagList={tagNames.table}
          />
        </div>
      </div>
    </div>
  );
}

export default TagLists;

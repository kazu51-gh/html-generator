import { HTMLUtility } from "@/utils/HTMLUtility";

const HTMLDescription = () => {
  return(
    <div className="HTML-description h-full w-full">
      <div className="w-[90%] h-[90%] overflow-y-scroll p-3">
        <div className="HTML-description">
          <h2 className="text-xl">HTMLって何？</h2>
          <p className="text-base mt-2 mb-3">
            HTML (HyperText Markup Language) とは、ウェブページを作成する際に使用するマークアップ言語です。
            ウェブページの内容はHTML文書 (拡張子が.htmlのファイル) に要素 (element) を組み合わせて記述します。
            以下の通りに記述していきましょう。
          </p>
        </div>
        <div className="step1">
          <h3 className="text-lg">1. 文書宣言(DOCTYPE宣言)の記述</h3>
          <p className="text-base mt-2 mb-3">
            HTML文書の1行目に文書宣言を記述します。
            現在の標準仕様のHTMLでは以下のように記述します。
          </p>
          <div className="flex justify-center">
            <code className="border border-black p-1 mb-5">&lt;!DOCTYPE&nbsp;html&gt;</code>
          </div>
        </div>
        <div className="step2">
          <h3 className="text-lg">2. html要素を用意する</h3>
          <p className="text-base mt-2 mb-3">
            文書宣言の次にhtml要素を用意します。
            以降の内容は全てこの要素内に記述していきます。
            この時点でのHTML文書は以下のようになります。
          </p>
          <div className="border border-black whitespace-pre-wrap p-1 mb-5">
            {HTMLUtility.getStep2()}
          </div>
        </div>
        <div className="step3">
          <h3 className="text-lg">3. head部を記述する</h3>
          <p className="text-base mt-2 mb-3">
            html要素内にまずhead部を記述します。
            ここにはページに関する情報や他ファイルや外部リソースへのリンク等を記述します。
            この時点でのHTML文書は以下のようになります。
          </p>
          <div className="border border-black whitespace-pre-wrap p-1 mb-5">
            {HTMLUtility.getStep3()}
          </div>
        </div>
        <div className="step4">
          <h3 className="text-lg">4. body部を記述する</h3>
          <p className="text-base mt-2 mb-3">
            head部の下にbody部を記述します。
            ここには実際に表示するコンテンツを記述します。
            この時点でのHTML文書は以下のようになります。
          </p>
          <div className="border border-black whitespace-pre-wrap p-1 mb-5">
            {HTMLUtility.getStep4()}
          </div>
        </div>
        <div className="step5">
          <h3 className="text-lg">5. 完成</h3>
          <p className="text-base mt-2 mb-3">
            以上の内容を記述することで基本的なHTML文書が完成します。
          </p>
        </div>
      </div>
    </div>
  );
}

export default HTMLDescription;

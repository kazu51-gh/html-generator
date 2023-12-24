import { Description } from "@/types/description";

export const accordionDescriptions: Description = {
  a: 'a : ハイパーリンク',
  blockquote: 'blockquote : 引用',
  br: 'br : 改行',
  button: 'button : ボタン',
  code: 'code : コンピュータコード',
  div: 'div : 要素用コンテナ',
  h: 'h1 ~ h6 : 見出し',
  hr: 'hr : 主題区切り(水平線)',
  img: 'img : 画像',
  input: 'input : 入力フォーム',
  ol: 'ol : 順序付きリスト',
  p: 'p : 段落',
  span: 'span : テキストマークアップ用コンテナ',
  strong: 'strong : 重要要素',
  textarea: 'textarea : テキストエリア',
  table: 'table : 表',
  ul: 'ul : 順序なしリスト',
}

export const functionDescriptions: Description = {
  codeArea: 'HTML文書のbody部となる内容を記述するエリアです。',
  download: '作成したHTML文書をダウンロードするページです。',
  elementList: 'HTML文書のbody部となる内容に使用されるHTML要素の一覧です。現在は使用頻度の高い要素のみ使用できます。',
  home: 'HTMLを学び、HTML文書を作成する',
  pageSetting: 'HTML文書のhead部の情報を設定します。',
  viewer: '作成中のHTML文書の表示を確認することが出来ます。実際の表示とは多少異なる場合があります。',
}

export const headingDescriptions: Description = {
  attribute:`HTML要素に付与する追加情報であり、要素の挙動などを指定するものです。
  開始タグに記述し、基本的には「属性名="属性値"」で指定します。
  全てのHTML要素にはグローバル属性が存在し、さらに固有の属性が存在する場合もあります。`,
  charset: '文書の文字コードを指定します。値は大文字小文字の区別なく"utf-8"にする必要があります。',
  class: `HTML要素にクラスを付与する属性です。
  idと違い、同じHTML文書内に同じclassを持つHTML要素を複数配置することが出来ます。
  classは1つのHTML要素に1つ以上のクラスを空白区切りで指定することが出来ます。`,
  description: 'ウェブページの説明文を指定します。ウェブブラウザの検索結果ページにおけるサイト説明などで使用されます。',
  globalAttribute: '全てのHTML要素で指定することが出来る属性です。要素によっては機能しない属性もあります。以下から必要な属性を選択してください。',
  head: `HTML文書のhead部のコードは以下の様になります。
  head部の内容はウェブページに表示されることはありませんが、ウェブページに必要な情報などを記述します。
  本アプリケーションではHTML文書のダウンロード時に自動挿入されるため、コードエリアに記述する必要はありません。`,
  id: `HTML要素に一意な識別子を付与する属性です。
  同じHTML文書内に同じidを持つHTML要素を記述してはいけません。
  idは1つのHTML要素に1つだけ指定することが出来ます。`,
  intrinsicAttribute: 'このHTML要素で指定することが出来る固有属性です。以下から必要な属性を選択してください。',
  title: 'ウェブページのタイトルをテキストで指定します。ウェブブラウザのタブ名やブックマーク名などで使用されます。',
}

export const htmlDescription: Description = {
  step1: `HTML文書の1行目に文書宣言を記述します。
  現在の標準仕様のHTMLでは以下のように記述します。`,
  step2: `文書宣言の次にhtml要素を用意します。
  以降の内容は全てこの要素内に記述していきます。
  この時点でのHTML文書は以下のようになります。`,
  step3: `html要素内にまずhead部を記述します。
  ここにはページに関する情報や他ファイルや外部リソースへのリンク等を記述します。
  この時点でのHTML文書は以下のようになります。`,
  step4: `head部の下にbody部を記述します。
  ここには実際に表示するコンテンツを記述します。
  この時点でのHTML文書は以下のようになります。`,
  step5: `以上の内容を記述することで基本的なHTML文書が完成します。`,
  what: `HTML(HyperText Markup Language)とは、ウェブページを作成する際に使用するマークアップ言語です。
  ウェブページの内容はHTML文書(拡張子が.htmlのファイル)に要素(element)を組み合わせて記述します。
  以下の通りに記述していきましょう。`,
}

export const tagDescriptions: Description = {
  a: 'ウェブページやファイル、メールアドレス、同じウェブページ内の場所へのハイパーリンクを作成するタグです。href属性を用いてURLなどを指定します。',
  blockquote: '引用文を表すタグです。このタグで囲まれたテキストが引用文であることを示し、通常は字下げして表示されます。引用元のURLはcite属性を用いて指定します。',
  br: '改行を追加するタグです。テキスト中で改行したい時に使用します。',
  button: 'ボタンを作成するタグです。ユーザのクリックやタップによって指定の操作(フォームの送信やダイヤログの表示など)が実行されます。',
  code: 'コンピュータコードの文字列であることを表すタグです。このタグで囲まれた文字列は既定の等幅フォントを使用して表示されます。',
  div: `コンテンツのブロックを表すタグです。
  このタグ単体でウェブページに影響することはないですが、idやclassを指定してコンテンツを囲むことで、CSSなどによる装飾を施すことができます。
  <span>と異なり、囲んだコンテンツ全体に装飾を適用したい時などに用いられます。`,
  h: `見出しを表すタグです。6段階存在しており、<h1>が一番大きく、順に小さくなっていきます。
  見やすさを考慮し、見出しレベルが小さいタグを多用することのないようにしましょう。
  また、同じページ内に<h1>は1つだけ配置し、見出しレベルを飛ばさずに下げていくことが一般的です。`,
  hr: 'テーマの区切りを表すタグです。水平線が引かれるため、セクションの区切りなどに使用されます。',
  img: 'ウェブページに画像を埋め込むためのタグです。src属性を用いて画像へのパスを、alt属性を用いて画像の説明文を指定します。',
  input: 'ユーザからのデータを受け付ける入力欄を作成するタグです。様々な入力形式を指定することが出来ます。',
  ol: '順序ありのリスト群を表すタグです。<li>によってリストを表し、一般的にはリストの行頭に番号を付けて表示されます。',
  p: 'テキストの段落を表すタグです。このタグで囲まれたテキストが1つのブロックとして扱われ、テキストの終わりに改行されます。',
  span: `コンテンツのブロックを表すタグです。
  このタグ単体でウェブページに影響することはないですが、idやclassを指定してコンテンツを囲むことで、CSSなどによる装飾を施すことができます。
  <div>と異なり、テキストの一部に装飾を適用したい時などに用いられます。`,
  strong: 'テキストを強調するためのタグです。このタグで囲まれたテキストは一般的に太字で表示されます。重要な内容にこのタグを使用すると良いでしょう。',
  textarea: 'テキストエリアを作成するタグです。<input>と異なり、複数行のテキストを入力できるエリアを設定することが出来ます。',
  table: 'データを表形式で表示するタグです。<table>関連のタグを組み合わせることで、様々な行や列を定義することが出来ます。',
  ul: '順序なしのリスト群を表すタグです。<li>によってリストを表し、一般的にはリストの行頭に記号を付けて表示されます。',
};

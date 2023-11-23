export const attributes: { [key: string]: string[] } = {
  global: [
    'accesskey',
    'autocapitalize',
    'autofocus',
    'contenteditable',
    'dir',
    'draggable',
    'enterkeyhint',
    'hidden',
    'inert',
    'inputmode',
    'is',
    'itemid',
    'itemprop',
    'itemref',
    'itemscope',
    'itemtype',
    'lang',
    'nonce',
    'popover',
    'spellcheck',
    'style',
    'tabindex',
    'title',
    'translate',
  ],
  a: [
    'href',
    'target',
    'download',
    'ping',
    'rel',
    'hreflang',
    'type',
    'referrerpolicy',
  ],
  blockquote: [
    'cite'
  ],
  br: [],
  button: [
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'name',
    'popovertarget',
    'popovertargetaction',
    'type',
    'value',
  ],
  code: [],
  div: [],
  h: [],
  hr: [],
  img: [
    'alt',
    'src',
    'srcset',
    'sizes',
    'crossorigin',
    'usemap',
    'ismap',
    'width',
    'height',
    'referrerpolicy',
    'decoding',
    'loading',
    'fetchpriority',
  ],
  input: [
    'accept',
    'alt',
    'autocomplete',
    'checked',
    'dirname',
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'height',
    'list',
    'max',
    'maxlength',
    'min',
    'minlength',
    'multiple',
    'name',
    'pattern',
    'placeholder',
    'popovertarget',
    'popovertargetaction',
    'readonly',
    'required',
    'size',
    'src',
    'step',
    'type',
    'value',
    'width',
  ],
  ol: [
    'reversed',
    'start',
    'type',
  ],
  p: [],
  span: [],
  strong: [],
  textarea: [
    'autocomplete',
    'cols',
    'dirname',
    'disabled',
    'form',
    'maxlength',
    'minlength',
    'name',
    'placeholder',
    'readonly',
    'required',
    'rows',
    'wrap',
  ],
  table: [],
  ul: [],
}

export const attributeCodes: { [key: string]: { [attribute: string]: string } } = {
  a: {
    'href': 'href="URL"',
    'target': 'target="コンテンツの表示形式"',
    'download': 'download="ファイル名(値は省略可能)"',
    'ping': 'ping="URL"',
    'rel': 'rel="リンク先との関係"',
    'hreflang': 'hreflang="言語コード"',
    'type': 'type="MIMEタイプ"',
    'referrerpolicy': 'referrerpolicy="リファラーポリシー"',
  },
  blockquote: {
    'cite': 'cite="引用元のURL"',
  },
  br: {},
  button: {
    'disabled': 'disabled',
    'form': 'form="属するフォームのid"',
    'formaction': 'formaction="送信先のURL"',
    'formenctype': 'formenctype="エンコード形式"',
    'formmethod': 'formmethod="フォームメソッド"',
    'formnovalidate': 'formnovalidate',
    'formtarget': 'formtarget="フォームの送信結果を表示するフレーム"',
    'name': 'name="ボタンの名前"',
    'popovertarget': 'popovertarget="ポップオーバー要素のid"',
    'popovertargetaction': 'popovertargetaction="ポップオーバー要素のアクション"',
    'type': 'type="ボタンの種類"',
    'value': 'value="ボタンの値"',
  },
  code: {},
  div: {},
  h: {},
  hr: {},
  img: {
    'alt': 'alt="画像の代替テキスト"',
    'src': 'src="画像へのパス or URL"',
    'srcset': 'srcset="画像セット"',
    'sizes': 'sizes="画像のサイズ"',
    'crossorigin': 'crossorigin="CORSの設定"',
    'usemap': 'usemap="クライアント側のマップ名"',
    'ismap': 'ismap',
    'width': 'width="画像の横幅"',
    'height': 'height="画像の高さ"',
    'referrerpolicy': 'referrerpolicy="リファラーポリシー"',
    'decoding': 'decoding="デコード方式"',
    'loading': 'loading="読み込み形式"',
    'fetchpriority': 'fetchpriority="読み込みの優先度"',
  },
  input: {
    'accept': 'accept="ファイル形式"',
    'alt': 'alt="代替テキスト"',
    'autocomplete': 'autocomplete="入力値のヒント"',
    'checked': 'checked',
    'dirname': 'dirname="入力値の方向性"',
    'disabled': 'disabled',
    'form': 'form="フォームID"',
    'formaction': 'formaction="送信先のURL"',
    'formenctype': 'formenctype="エンコード形式"',
    'formmethod': 'formmethod="フォームメソッド"',
    'formnovalidate': 'formnovalidate',
    'formtarget': 'formtarget="フォームの送信結果を表示するフレーム"',
    'height': 'height="高さ"',
    'list': 'list="datalist要素のID"',
    'max': 'max="最大値"',
    'maxlength': 'maxlength="最大文字数"',
    'min': 'min="最小値"',
    'minlength': 'minlength="最小文字数"',
    'multiple': 'multiple',
    'name': 'name="入力欄の名前"',
    'pattern': 'pattern="正規表現"',
    'placeholder': 'placeholder="値がない時に薄く表示されるテキスト"',
    'popovertarget': 'popovertarget="ポップオーバー要素のid"',
    'popovertargetaction': 'popovertargetaction="ポップオーバー要素のアクション"',
    'readonly': 'readonly',
    'required': 'required',
    'size': 'size="横幅"',
    'src': 'src="リソースの在り処"',
    'step': 'step="入力値の増減幅"',
    'type': 'type="入力欄のタイプ"',
    'value': 'value="入力欄の初期値"',
    'width': 'width="横幅"',
  },
  ol: {
    'reversed': 'reversed',
    'start': 'start="リストの開始番号"',
    'type': 'type="リストマーカーの種類"',
  },
  p: {},
  span: {},
  strong: {},
  textarea: {
    'autocomplete': 'autocomplete="入力値のヒント"',
    'cols': 'cols="横幅"',
    'dirname': 'dirname="入力値の方向性"',
    'disabled': 'disabled',
    'form': 'form="フォームID"',
    'maxlength': 'maxlength="最大文字数"',
    'minlength': 'minlength="最小文字数"',
    'name': 'name="テキストエリアの名前"',
    'placeholder': 'placeholder="値がない時に薄く表示されるテキスト"',
    'readonly': 'readonly',
    'required': 'required',
    'rows': 'rows="縦幅(行数)"',
    'wrap': 'wrap="自動改行モード"',
  },
  table: {},
  ul: {},
}

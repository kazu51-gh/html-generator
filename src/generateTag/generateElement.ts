import { PairTagElement } from "@/generateTag/pairTagElement";
import { VoidElement } from "@/generateTag/voidElement";

/**
 * 要素(element)を生成するクラス
 */
export class GenerateElement extends Object {
  private pairTagElement: PairTagElement;
  private emptyTagElement: VoidElement;

  /**
   * 要素を生成するクラスのインスタンスを生成する
   */
  constructor() {
    super();
    this.pairTagElement = new PairTagElement();
    this.emptyTagElement = new VoidElement();
  }

  /**
   * 要素を生成する
   * @param tagName タグ名
   * @returns 要素
   */
  public generateElement = (
    tagName: string,
    attributes: string[] = [],
    content: string = '',
    lists: number = 0,
    columns: number = 0,
    rows: number = 0
    ): string => {
    const hTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const htmlDocumentTags = ['title', 'head', 'body', 'html'];
    const listTags = ['ol', 'ul'];
    const noContentTag = ['area', 'base', 'br', 'col', 'embed', 'hr', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

    if (hTags.find((hTag) => (hTag === tagName))) { return(this.pairTagElement.getPairTagElement(tagName, attributes, '見出しのテキスト')); }
    else if (noContentTag.find((tag) => (tag === tagName))) { return(this.emptyTagElement.getEmptyTagElement(tagName, attributes)); }
    else if (listTags.find((tag) => (tag === tagName))) { return(this.generateListElement(tagName, attributes, lists)); }
    else if (htmlDocumentTags.find((tag) => (tag === tagName))) { return(this.pairTagElement.getPairTagElement(tagName, attributes, content)); }
    else if (tagName === 'img') { return(this.emptyTagElement.getEmptyTagElement(tagName, attributes.concat(['src="画像へのパス"', 'alt="代替テキスト"']))); }
    else if (tagName === 'input') { return(this.emptyTagElement.getEmptyTagElement(tagName, attributes.concat(['type="タイプ"']))); }
    else if (tagName === 'p') { return(this.pairTagElement.getPairTagElement(tagName, attributes, '表示するテキスト')); }
    else if (tagName === 'a') { return(this.pairTagElement.getPairTagElement(tagName, attributes.concat(['href="リンク"']), 'リンクを貼り付けるテキスト')); }
    else if (tagName === 'div') { return(this.pairTagElement.getPairTagElement(tagName, attributes, 'コンテンツ')); }
    else if (tagName === 'span') { return(this.pairTagElement.getPairTagElement(tagName, attributes, 'コンテンツ')); }
    else if (tagName === 'strong') { return(this.pairTagElement.getPairTagElement(tagName, attributes, '強調するテキスト')); }
    else if (tagName === 'blockquote') { return(this.pairTagElement.getPairTagElement(tagName, attributes.concat(['cite="引用元"']), '引用文')); }
    else if (tagName === 'code') { return(this.pairTagElement.getPairTagElement(tagName, attributes, 'コード')); }
    else if (tagName === 'textarea') { return(this.pairTagElement.getPairTagElement(tagName, attributes.concat(['rows="縦方向の文字数"', 'cols="横方向の文字数"']), '初期テキスト')); }
    else if (tagName === 'button') { return(this.pairTagElement.getPairTagElement(tagName, attributes.concat(['type="タイプ"']), 'ボタンに表示するテキスト')); }
    else if (tagName === 'table') { return(this.generateTableTagElement(tagName, attributes, columns, rows)); }
    return('一致するタグが存在しません');
  }

  /**
   * リスト要素(ol, ul)を生成する
   * @param tagName タグ名
   * @param attributes 属性
   * @param lists リスト
   * @returns リスト要素
   */
  public generateListElement = (tagName: string, attributes: string[], lists: number): string => {
    const contents = this.generateLiTagElement(lists);
    const element = this.pairTagElement.getPairTagElement(tagName, attributes, contents);
    return(element);
  }

  /**
   * liタグを指定された個数だけ生成する
   * @param lists リスト
   * @returns liタグの集合文字列
   */
  public generateLiTagElement = (lists: number): string => {
    let code = '';
    for(let i = 0; i < lists; i++) {
      code = code + '\r\n\t' + this.pairTagElement.getPairTagElement('li', [], `リスト${i+1}`);
    }
    return code + '\r\n';
  }

  /**
   * テーブル要素(table)を生成する。
   * @param tagName タグ名
   * @param attributes 属性
   * @param columns 行数
   * @param rows 列数
   * @returns テーブル要素
   */
  public generateTableTagElement = (tagName: string, attributes: string[], columns: number, rows: number): string => {
    const caption = '\r\n\t' + this.pairTagElement.getPairTagElement('caption', [], 'テーブル名');
    const thTags = this.generateThTagElement(columns) + '\t\t';
    const tdTags = this.generateTdTagElement(columns) + '\t\t';
    const trTagForThead = '\r\n\t\t' + this.pairTagElement.getPairTagElement('tr', [], thTags) + '\r\n\t';
    const trTagForTbody = this.generateTrTagElement(rows, tdTags) + '\t';
    const theadTag = '\t' + this.pairTagElement.getPairTagElement('thead', [], trTagForThead) + '\r\n';
    const tbodyTag = '\t' + this.pairTagElement.getPairTagElement('tbody', [], trTagForTbody) + '\r\n';
    const tableTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, caption + '\r\n' + theadTag + tbodyTag);
    return(tableTagElement);
  }

  /**
   * thタグを指定された個数だけ生成する
   * @param columns 行数
   * @returns thタグの集合文字列
   */
  public generateThTagElement = (columns: number): string => {
    let code = '';
    for(let i = 0; i < columns; i++) {
      code = code + '\r\n\t\t\t' + this.pairTagElement.getPairTagElement('th', [], `列タイトル${i+1}`);
    }
    return code + '\r\n';
  }

  /**
   * tdタグを指定された個数だけ生成する
   * @param columns 行数
   * @returns tdタグの集合文字列
   */
  public generateTdTagElement = (columns: number): string => {
    let code = '';
    for(let i = 0; i < columns; i++) {
      code = code + '\r\n\t\t\t' + this.pairTagElement.getPairTagElement('td', [], `コンテンツ${i+1}`);
    }
    return code + '\r\n';
  }

  /**
   * trタグを指定された個数だけ生成する
   * @param rows 列数
   * @param tdTags tdタグの集合文字列
   * @returns trタグの集合文字列
   */
  public generateTrTagElement = (rows: number, tdTags: string): string => {
    let code = '';
    for(let i = 0; i < rows; i++) {
      code = code + '\r\n\t\t' + this.pairTagElement.getPairTagElement('tr', [], tdTags);
    }
    return code + '\r\n';
  }
}

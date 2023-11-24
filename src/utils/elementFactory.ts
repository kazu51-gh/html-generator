import { NormalElement } from "@/ElementGenerator/normalElement";
import { VoidElement } from "@/ElementGenerator/voidElement";

export class HtmlElementFactory {
  public static generate = (
    tagName: string,
    attributes: string[] = [],
    content: string = '',
    listCounter: number = 0,
    columns: number = 0,
    rows: number = 0
    ): string => {
    const voidElements: string[] = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'];
    const headingElements: string[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const listElements: string[] = ['ol', 'ul'];
    const contentData: Record<string, string> = {
      a: 'リンクとして表示するテキスト',
      blockquote: '引用文',
      button: 'ボタンに表示するテキスト',
      code: 'コード',
      div: 'コンテンツ',
      h: '見出しのテキスト',
      p: 'テキスト',
      span: 'コンテンツ',
      strong: '強調するテキスト',
      textarea: '初期テキスト',
    }

    if (voidElements.includes(tagName)) { return(this.generateVoidElement(tagName, attributes)); }
    else if (headingElements.includes(tagName)) { return(this.generateHeadingElement(tagName, attributes, contentData['h'])); }
    else if (listElements.includes(tagName)) {
      const liElement = this.generateList(listCounter);
      const element = new NormalElement(tagName, attributes, liElement);
      return(element.generateElement());
    } else if (tagName === 'table') {
      const tableContent = this.generateTableContent(columns, rows);
      const element = new NormalElement(tagName, attributes, tableContent);
      return(element.generateElement());
    } else if (contentData[tagName]) {
      const content = contentData[tagName];
      const element = new NormalElement(tagName, attributes, content);
      return(element.generateElement());
    } else {
      const element = new NormalElement(tagName, attributes, content);
      return(element.generateElement());
    }
  }

  /**
   * 空要素を生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @returns 空要素
   */
  private static generateVoidElement(tagName: string, attributes: string[]): string {
    const voidElement = new VoidElement(tagName, attributes);
    return(voidElement.generateElement());
  }

  /**
   * h要素(h1~h6要素)を生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param content コンテンツ
   * @returns hタグ
   */
  private static generateHeadingElement(tagName: string, attributes: string[], content: string): string {
    const normalElement = new NormalElement(tagName, attributes, content);
    return(normalElement.generateElement());
  }

  /**
   * li要素を指定された個数だけ生成する
   * @param listCounter リスト数
   * @returns li要素の集合文字列
   */
  private static generateList = (listCounter: number): string => {
    let code = '';
    for(let i = 0; i < listCounter; i++) {
      const element = new NormalElement('li', [], `リスト${i+1}`);
      code = code + '\r\n\t' + element.generateElement();
    }
    return code + '\r\n';
  }

  /**
   * テーブル要素のコンテンツを生成する。
   * @param tagName タグ名
   * @param attributes 属性
   * @param columns 行数
   * @param rows 列数
   * @returns テーブル要素のコンテンツ
   */
  private static generateTableContent = (
    columns: number,
    rows: number
    ): string => {
    const caption = '\r\n\t' + this.generateCaptionElement();
    const thElements = this.generateThElement(columns) + '\t\t';
    const tdElements = this.generateTdElement(columns) + '\t\t';
    const trElementForThead = '\r\n\t\t' + this.generateTrElementForThead(thElements) + '\r\n\t';
    const trElementForTbody = this.generateTrElement(rows, tdElements) + '\t';
    const thead = '\t' + this.generateTheadElement(trElementForThead) + '\r\n';
    const tbody = '\t' + this.generateTbodyElement(trElementForTbody) + '\r\n';
    const tableElementContent = caption + '\r\n' + thead + tbody;
    return(tableElementContent);
  }

  /**
   * caption要素を生成する
   * @returns caption要素
   */
  private static generateCaptionElement = (): string => {
    const element = new NormalElement('caption', [], 'テーブル名');
    return(element.generateElement());
  }

  /**
   * thead要素に内包するtr要素を生成する
   * @param trContent tr要素のコンテンツ
   * @returns tr要素
   */
  private static generateTrElementForThead = (trContent: string): string => {
    const element = new NormalElement('tr', [], trContent);
    return(element.generateElement());
  }

  /**
   * thead要素を生成する
   * @param trElements tr要素群
   * @returns thead要素
   */
  private static generateTheadElement = (trElements: string): string => {
    const element = new NormalElement('thead', [], trElements);
    return(element.generateElement());
  }

  /**
   * tbody要素を生成する
   * @param trElements tr要素群
   * @returns thead要素
   */
  private static generateTbodyElement = (trElements: string): string => {
    const element = new NormalElement('tbody', [], trElements);
    return(element.generateElement());
  }

  /**
   * th要素を指定された個数だけ生成する
   * @param columns 行数
   * @returns th要素の集合文字列
   */
  private static generateThElement = (columns: number): string => {
    let code = '';
    for(let i = 0; i < columns; i++) {
      const element = new NormalElement('th', [], `列タイトル${i+1}`);
      code = code + '\r\n\t\t\t' + element.generateElement();
    }
    return code + '\r\n';
  }

  /**
   * td要素を指定された個数だけ生成する
   * @param columns 行数
   * @returns tdタグ要素の集合文字列
   */
  private static generateTdElement = (columns: number): string => {
    let code = '';
    for(let i = 0; i < columns; i++) {
      const element = new NormalElement('td', [], `コンテンツ${i+1}`);
      code = code + '\r\n\t\t\t' + element.generateElement();
    }
    return code + '\r\n';
  }

  /**
   * tr要素を指定された個数だけ生成する
   * @param rows 列数
   * @param tdTags td要素の集合文字列
   * @returns tr要素の集合文字列
   */
  private static generateTrElement = (rows: number, tdTags: string): string => {
    let code = '';
    for(let i = 0; i < rows; i++) {
      const element = new NormalElement('tr', [], tdTags);
      code = code + '\r\n\t\t' + element.generateElement();
    }
    return code + '\r\n';
  }
}

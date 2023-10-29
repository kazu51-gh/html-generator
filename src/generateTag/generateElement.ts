import { PairTagElement } from "@/generateTag/pairTagElement";
import { EmptyTagElement } from "@/generateTag/emptyTagElement";

/**
 * HTML要素を生成するクラス
 */
export class GenerateElement extends Object {
  private pairTagElement: PairTagElement;
  private emptyTagElement: EmptyTagElement;

  /**
   * HTML要素を生成するクラスのインスタンスを生成する
   */
  constructor() {
    super();
    this.pairTagElement = new PairTagElement();
    this.emptyTagElement = new EmptyTagElement();
  }

  /**
   * HTML要素を生成する
   * @param tagName タグ名
   * @returns HTML要素
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
    let element = '';

    if (hTags.find((hTag) => hTag === tagName)) { element = this.generateHTagElement(tagName, attributes, content); }
    else if (tagName === 'p') { element = this.generatePTagElement(tagName, attributes, content); }
    else if (tagName === 'a') { element = this.generateATagElement(tagName, attributes, content); }
    else if (tagName === 'img') { element = this.generateImgTagElement(tagName, attributes); }
    else if (tagName === 'ul') { element = this.generateUlTagElement(tagName, attributes, lists); }
    else if (tagName === 'ol') { element = this.generateOlTagElement(tagName, attributes, lists); }
    else if (tagName === 'div') { element = this.generateDivTagElement(tagName, attributes, content); }
    else if (tagName === 'span') { element = this.generateSpanTagElement(tagName, attributes, content); }
    else if (tagName === 'br') { element = this.generateBrTagElement(tagName, attributes); }
    else if (tagName === 'hr') { element = this.generateHrTagElement(tagName, attributes); }
    else if (tagName === 'strong') { element = this.generateStrongTagElement(tagName, attributes, content); }
    else if (tagName === 'blockquote') { element = this.generateBlockquoteTagElement(tagName, attributes, content); }
    else if (tagName === 'code') { element = this.generateCodeTagElement(tagName, attributes, content); }
    else if (tagName === 'input') { element = this.generateInputTagElement(tagName, attributes); }
    else if (tagName === 'textarea') { element = this.generateTextareaTagElement(tagName, attributes, content); }
    else if (tagName === 'button') { element = this.generateButtonTagElement(tagName, attributes, content); }
    else if (tagName === 'table') { element = this.generateTableTagElement(tagName, attributes, columns, rows); }
    else if (tagName === 'meta') { element = this.generateMetaTagElement(tagName, attributes); }
    else if (tagName === 'title') { element = this.generateTitleTagElement(tagName, attributes, content); }
    else if (tagName === 'head') { element = this.generateHeadTagElement(tagName, attributes, content); }
    else if (tagName === 'body') { element = this.generateBodyTagElement(tagName, attributes, content); }
    else if (tagName === 'html') { element = this.generateHtmlTagElement(tagName, attributes, content); }
    return(element);
  }

  public generateHTagElement = (tagName: string, attributes: string[], content: string): string => {
    const hTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(hTagElement);
  }

  public generatePTagElement = (tagName: string, attributes: string[], content: string): string => {
    const pTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(pTagElement);
  }

  public generateATagElement = (tagName: string, attributes: string[], content: string): string => {
    const aTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(aTagElement);
  }

  public generateImgTagElement = (tagName: string, attributes: string[]): string => {
    const imgTagElement = this.emptyTagElement.getEmptyTagElement(tagName, attributes);
    return(imgTagElement);
  }

  public generateUlTagElement = (tagName: string, attributes: string[], lists: number): string => {
    const contents = this.generateLiTagElement(lists);
    const ulTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, contents);
    return(ulTagElement);
  }

  public generateOlTagElement = (tagName: string, attributes: string[], lists: number): string => {
    const contents = this.generateLiTagElement(lists);
    const olTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, contents);
    return(olTagElement);
  }

  public generateLiTagElement = (lists: number): string => {
    const liTag = this.pairTagElement.getPairTagElement('li', [], 'リスト');
    let code = '';

    for(let i = 0; i < lists; i++) {
      code = code + '\r\n\t' + liTag;
    }
    return code + '\r\n';
  }

  public generateDivTagElement = (tagName: string, attributes: string[], content: string): string => {
    const divTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(divTagElement);
  }

  public generateSpanTagElement = (tagName: string, attributes: string[], content: string): string => {
    const spanTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(spanTagElement);
  }

  public generateBrTagElement = (tagName: string, attributes: string[]): string => {
    const brTagElement = this.emptyTagElement.getEmptyTagElement(tagName, attributes);
    return(brTagElement);
  }

  public generateHrTagElement = (tagName: string, attributes: string[]): string => {
    const hrTagElement = this.emptyTagElement.getEmptyTagElement(tagName, attributes);
    return(hrTagElement);
  }

  public generateStrongTagElement = (tagName: string, attributes: string[], content: string): string => {
    const strongTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(strongTagElement);
  }

  public generateBlockquoteTagElement = (tagName: string, attributes: string[], content: string): string => {
    const blockquoteTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(blockquoteTagElement);
  }

  public generateCodeTagElement = (tagName: string, attributes: string[], content: string): string => {
    const codeTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(codeTagElement);
  }

  public generateInputTagElement = (tagName: string, attributes: string[]): string => {
    const inputTagElement = this.emptyTagElement.getEmptyTagElement(tagName, attributes);
    return(inputTagElement);
  }

  public generateTextareaTagElement = (tagName: string, attributes: string[], content: string): string => {
    const textareaTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(textareaTagElement);
  }

  public generateButtonTagElement = (tagName: string, attributes: string[], content: string): string => {
    const buttonTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(buttonTagElement);
  }

  public generateTableTagElement = (tagName: string, attributes: string[], columns: number, rows: number): string => {
    const caption = '\r\n\t' + this.pairTagElement.getPairTagElement('caption', [], 'テーブル名');
    const thTags = this.generateThTagElement(columns) + '\t\t';
    const tdTags = this.generateTdElement(columns) + '\t\t';
    const trTagForThead = '\r\n\t\t' + this.pairTagElement.getPairTagElement('tr', [], thTags) + '\r\n\t';
    const trTagForTbody = this.generateTrElement(rows, tdTags) + '\t';
    const theadTag = '\t' + this.pairTagElement.getPairTagElement('thead', [], trTagForThead) + '\r\n';
    const tbodyTag = '\t' + this.pairTagElement.getPairTagElement('tbody', [], trTagForTbody) + '\r\n';
    const tableTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, caption + '\r\n' + theadTag + tbodyTag);
    return(tableTagElement);
  }

  public generateThTagElement = (columns: number): string => {
    const thTag = this.pairTagElement.getPairTagElement('th', [], '列のタイトル');
    let code = '';

    for(let i = 0; i < columns; i++) {
      code = code + '\r\n\t\t\t' + thTag;
    }
    return code + '\r\n';
  }

  public generateTdElement = (columns: number): string => {
    const tdTag = this.pairTagElement.getPairTagElement('td', [], 'コンテンツ');
    let code = '';

    for(let i = 0; i < columns; i++) {
      code = code + '\r\n\t\t\t' + tdTag;
    }
    return code + '\r\n';
  }

  public generateTrElement = (rows: number, td: string): string => {
    const tdTag = this.pairTagElement.getPairTagElement('tr', [], td);
    let code = '';

    for(let i = 0; i < rows; i++) {
      code = code + '\r\n\t\t' + tdTag;
    }
    return code + '\r\n';
  }

  public generateMetaTagElement = (tagName: string, attributes: string[]): string => {
    const metaTagElement = this.emptyTagElement.getEmptyTagElement(tagName, attributes);
    return(metaTagElement);
  }

  public generateTitleTagElement = (tagName: string, attributes: string[], content: string): string => {
    const titleTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(titleTagElement);
  }

  public generateHeadTagElement = (tagName: string, attributes: string[], content: string): string => {
    const headTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(headTagElement);
  }

  public generateBodyTagElement = (tagName: string, attributes: string[], content: string): string => {
    const bodyTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(bodyTagElement);
  }

  public generateHtmlTagElement = (tagName: string, attributes: string[], content: string): string => {
    const bodyTagElement = this.pairTagElement.getPairTagElement(tagName, attributes, content);
    return(bodyTagElement);
  }
}

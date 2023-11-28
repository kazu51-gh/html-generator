import { NormalElementFactory } from "@/ElementFactory/normalElementFactory";

/**
 * table要素を作成するクラス
 */
export class TableElementFactory extends Object {
  private tagName: string;
  private attributes: string[];
  private columns: number;
  private rows: number;

  /**
   * table要素のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param columns 行数
   * @param rows 列数
   */
  constructor(tagName: string, attributes: string[], columns: number, rows: number) {
    super();
    this.tagName = tagName;
    this.attributes = attributes;
    this.columns = columns;
    this.rows = rows;
  }

  /**
   * table要素を作成する
   * @returns table要素
   */
  public createElement(): string {
    const content = this.createTableContent();
    const normalElementFactory = new NormalElementFactory(this.tagName, this.attributes, content);
    const element = normalElementFactory.createElement();
    return(element);
  }

  /**
   * table要素のコンテンツを作成する
   * @returns コンテンツ
   */
  private createTableContent(): string {
    const caption = '\r\n\t' + this.createCaptionElement();
    const thElements = this.createThElement() + '\t\t';
    const tdElements = this.createTdElement() + '\t\t';
    const trElementForThead = '\r\n\t\t' + this.createTrElementForThead(thElements) + '\r\n\t';
    const trElementForTbody = this.createTrElementForTbody(tdElements) + '\t';
    const thead = '\t' + this.createTheadElement(trElementForThead) + '\r\n';
    const tbody = '\t' + this.createTbodyElement(trElementForTbody) + '\r\n';
    const content = caption + '\r\n' + thead + tbody;
    return(content);
  }

  /**
   * caption要素を作成する
   * @returns caption要素
   */
  private createCaptionElement(): string {
    const normalElementFactory = new NormalElementFactory('caption', [], 'テーブル名');
    const element = normalElementFactory.createElement();
    return(element);
  }

  /**
   * th要素を指定された個数だけ作成する
   * @returns th要素群
   */
  private createThElement(): string {
    let code = '';
    [...Array(this.columns)].forEach((_, i) => {
      const normalElementFactory = new NormalElementFactory('th', [], `列タイトル${i+1}`);
      code = code + '\r\n\t\t\t' + normalElementFactory.createElement();
    });
    return(code + '\r\n');
  }

  /**
   * td要素を指定された個数だけ作成する
   * @returns td要素群
   */
  private createTdElement(): string {
    let code = '';
    [...Array(this.columns)].forEach((_, i) => {
      const normalElementFactory = new NormalElementFactory('td', [], `コンテンツ${i+1}`);
      code = code + '\r\n\t\t\t' + normalElementFactory.createElement();
    });
    return(code + '\r\n');
  }

  /**
   * thead要素に内包するtr要素を作成する
   * @param trContent tr要素のコンテンツ
   * @returns tr要素
   */
  private createTrElementForThead(trContent: string): string {
    const normalElementFactory = new NormalElementFactory('tr', [], trContent);
    const element = normalElementFactory.createElement();
    return(element);
  }

  /**
   * tbody要素に内包するtr要素を指定された個数だけ作成する
   * @param tdElements td要素群
   * @returns tr要素群
   */
  private createTrElementForTbody(tdElements: string): string {
    let code = '';
    [...Array(this.rows)].forEach(() => {
      const normalElementFactory = new NormalElementFactory('tr', [], tdElements);
      code = code + '\r\n\t\t' + normalElementFactory.createElement();
    });
    return(code + '\r\n');
  }

  /**
   * thead要素を作成する
   * @param trElements tr要素群
   * @returns thead要素
   */
  private createTheadElement(trElements: string): string {
    const normalElementFactory = new NormalElementFactory('thead', [], trElements);
    const element = normalElementFactory.createElement();
    return(element);
  }

  /**
   * tbody要素を作成する
   * @param trElements tr要素群
   * @returns tbody要素
   */
  private createTbodyElement(trElements: string): string {
    const normalElementFactory = new NormalElementFactory('tbody', [], trElements);
    const element = normalElementFactory.createElement();
    return(element);
  }
}

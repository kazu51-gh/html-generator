import { HTMLElementFactory } from "@/packages/ElementFactory/HTMLElementFactory";
import { NormalElementFactory } from "@/packages/ElementFactory/normalElementFactory";

/**
 * table要素を作成するクラス
 */
export class TableElementFactory extends HTMLElementFactory {
  private normalElementFactory: NormalElementFactory;
  private columns: number;
  private rows: number;

  /**
   * table要素作成器のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param columns 列数(横方向のセル数)
   * @param rows 行数(縦方向のセル数)
   */
  constructor(tagName: string, attributes: string[], columns: number, rows: number) {
    super();
    this.columns = columns;
    this.rows = rows;
    const content = this.createContent();
    this.normalElementFactory = new NormalElementFactory(tagName, attributes, content);
  }

  /**
   * table要素に内包するコンテンツを作成する
   * @returns コンテンツ
   */
  private createContent(): string {
    const caption = this.createCaptionElement();
    const thElements = this.createHeaderCellElements() + '\t\t';
    const tdElements = this.createCellElements() + '\t\t';
    const trElementForThead = '\r\n\t\t' + this.createRowElementForThead(thElements) + '\r\n\t';
    const trElementsForTbody = this.createRowElementsForTbody(tdElements) + '\t';
    const thead = this.createHeadingRowsGroupElement(trElementForThead);
    const tbody = this.createRowsGroupElement(trElementsForTbody);
    const content = '\r\n\t' + caption + '\r\n\t' + thead + '\r\n\t' + tbody + '\r\n';
    return content;
  }

  /**
   * caption要素を作成する
   * @returns caption要素
   */
  private createCaptionElement(): string {
    const normalElementFactory = new NormalElementFactory('caption', [], '表題');
    const element = normalElementFactory.createElement();
    return element;
  }

  /**
   * th要素を指定された個数だけ作成する
   * @returns th要素群
   */
  private createHeaderCellElements(): string {
    let code = '';
    [...Array(this.columns)].forEach((_, i) => {
      const normalElementFactory = new NormalElementFactory('th', [], `列タイトル${i+1}`);
      code = code + '\r\n\t\t\t' + normalElementFactory.createElement();
    });
    const elements = code + '\r\n';
    return elements;
  }

  /**
   * td要素を指定された個数だけ作成する
   * @returns td要素群
   */
  private createCellElements(): string {
    let code = '';
    [...Array(this.columns)].forEach((_, i) => {
      const normalElementFactory = new NormalElementFactory('td', [], `コンテンツ${i+1}`);
      code = code + '\r\n\t\t\t' + normalElementFactory.createElement();
    });
    const elements = code + '\r\n';
    return elements;
  }

  /**
   * thead要素に内包するtr要素を作成する
   * @param thElements th要素群
   * @returns tr要素
   */
  private createRowElementForThead(thElements: string): string {
    const normalElementFactory = new NormalElementFactory('tr', [], thElements);
    const element = normalElementFactory.createElement();
    return element;
  }

  /**
   * tbody要素に内包するtr要素を指定された個数だけ作成する
   * @param tdElements td要素群
   * @returns tr要素群
   */
  private createRowElementsForTbody(tdElements: string): string {
    let code = '';
    [...Array(this.rows)].forEach(() => {
      const normalElementFactory = new NormalElementFactory('tr', [], tdElements);
      code = code + '\r\n\t\t' + normalElementFactory.createElement();
    });
    const elements = code + '\r\n';
    return elements;
  }

  /**
   * thead要素を作成する
   * @param trElement tr要素
   * @returns thead要素
   */
  private createHeadingRowsGroupElement(trElement: string): string {
    const normalElementFactory = new NormalElementFactory('thead', [], trElement);
    const element = normalElementFactory.createElement();
    return element;
  }

  /**
   * tbody要素を作成する
   * @param trElements tr要素群
   * @returns tbody要素
   */
  private createRowsGroupElement(trElements: string): string {
    const normalElementFactory = new NormalElementFactory('tbody', [], trElements);
    const element = normalElementFactory.createElement();
    return element;
  }

  /**
   * table要素を作成する
   * @returns table要素
   */
  public createElement(): string {
    const element = this.normalElementFactory.createElement();
    return element;
  }
}

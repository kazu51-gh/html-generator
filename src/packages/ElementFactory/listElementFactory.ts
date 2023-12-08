import { HTMLElementFactory } from "@/packages/ElementFactory/HTMLElementFactory";
import { NormalElementFactory } from "@/packages/ElementFactory/normalElementFactory";

/**
 * リスト要素(ol要素またはul要素)を作成するクラス
 */
export class ListElementFactory extends HTMLElementFactory {
  private listFactory: NormalElementFactory;
  private listItemFactory: NormalElementFactory;
  private listItemCounter: number;

  /**
   * リスト要素作成器のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param listItemCounter li要素の個数
   */
  constructor(tagName: string, attributes: string[], listItemCounter: number) {
    super();
    this.listItemCounter = listItemCounter;
    this.listItemFactory = new NormalElementFactory('li', [], 'リスト項目');
    const listContent = this.createListContent();
    this.listFactory = new NormalElementFactory(tagName, attributes, listContent);
  }

  /**
   * リスト要素のコンテンツを作成する
   * @returns コンテンツ
   */
  public createListContent(): string {
    let code = '';
    const listItemElement = this.listItemFactory.createElement();
    [...Array(this.listItemCounter)].map(() => {
      code += '\r\n\t' + listItemElement;
    });
    const listContent = code + '\r\n';
    return listContent;
  }

  /**
   * リスト要素を作成する
   * @returns リスト要素
   */
  public createElement(): string {
    const element = this.listFactory.createElement();
    return element;
  }
}

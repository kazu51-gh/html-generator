import { HTMLElementFactory } from "@/packages/ElementFactory/HTMLElementFactory";
import { NormalElementFactory } from "@/packages/ElementFactory/normalElementFactory";

/**
 * リスト要素(ol要素またはul要素)を作成するクラス
 */

export class ListElementFactory extends HTMLElementFactory {
  private listItemCounter: number;
  private normalElementFactory: NormalElementFactory;

  /**
   * リスト要素作成器のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param listItemCounter 内包するリストアイテム要素(li要素)の個数
   */
  constructor(tagName: string, attributes: string[], listItemCounter: number) {
    super();
    this.listItemCounter = listItemCounter;
    const content = this.createContent();
    this.normalElementFactory = new NormalElementFactory(tagName, attributes, content);
  }

  /**
   * リストアイテム要素を指定された数だけ作成し、内包するコンテンツを作成する
   * @returns コンテンツ
   */
  private createContent(): string {
    let code = '';
    [...Array(this.listItemCounter)].forEach((_, i) => {
      const normalElementFactory = new NormalElementFactory('li', [], `リスト${i+1}`);
      const listItem = normalElementFactory.createElement();
      code = code + '\r\n\t' + listItem;
    });
    const content = code + '\r\n';
    return content;
  }

  /**
   * リスト要素を作成する
   * @returns リスト要素
   */
  public createElement(): string {
    const element = this.normalElementFactory.createElement();
    return element;
  }
}
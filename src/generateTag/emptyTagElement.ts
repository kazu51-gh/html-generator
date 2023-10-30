import { Element } from "@/generateTag/element";
import { OpeningTag } from "@/generateTag/openingTag";
import { Attribute } from "@/generateTag/attribute";

/**
 * 空要素(void element)を定義するクラス
 */
export class EmptyTagElement extends Element {
  private openingTag: OpeningTag;
  private attributes: Attribute;

  /**
   * 空要素のインスタンスを生成する
   */
  constructor() {
    super();
    this.openingTag = new OpeningTag();
    this.attributes = new Attribute();
  }

  /**
   * 空要素を取得する
   * @param tagName タグ名
   * @returns 空要素
   */
  public getEmptyTagElement(tagName: string, attributes: string[]): string {
    const element = this.openingTag.getOpeningTag(tagName, attributes);
    return(element);
  }
}

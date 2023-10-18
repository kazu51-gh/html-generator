import { Element } from "@/generateTag/Element";
import { OpeningTag } from "@/generateTag/openingTag";
import { Attribute } from "@/generateTag/attribute";

/**
 * 空要素を定義するクラス
 */
export class EmptyTagElement extends Element {
  public openingTag: OpeningTag;
  public attribute: Attribute;

  /**
   * 空要素のインスタンスを生成する
   */
  constructor() {
    super();
    this.openingTag = new OpeningTag();
    this.attribute = new Attribute();
  }

  /**
   * 空要素を取得する
   * @param tagName タグ名
   * @returns 空要素
   */
  public getEmptyTagElement(tagName: string, attributes: string[]): string {
    const element = this.openingTag.getOpeningTagForEmpty(tagName, attributes);
    return(element);
  }
}

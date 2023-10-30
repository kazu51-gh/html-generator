import { ClosingTag } from "@/generateTag/closingTag";
import { Contents } from "@/generateTag/contents";
import { OpeningTag } from "@/generateTag/openingTag";
import { Element } from "@/generateTag/element";
import { Attribute } from "@/generateTag/attribute";

/**
 * ペアタグ要素を定義するクラス
 */
export class PairTagElement extends Element {
  private openingTag: OpeningTag;
  private closingTag: ClosingTag;
  private contents: Contents;
  private attribute: Attribute;

  /**
   * ペアタグ要素のインスタンスを生成する
   */
  constructor() {
    super();
    this.openingTag = new OpeningTag();
    this.closingTag = new ClosingTag();
    this.contents = new Contents();
    this.attribute = new Attribute();
  }

  /**
   * ペアタグ要素を取得する
   * @param tagName タグ名
   * @param contents コンテンツ
   * @returns ペアタグ要素
   */
  public getPairTagElement(tagName: string, attributes: string[], contents: string): string {
    const opening = this.openingTag.getOpeningTag(tagName, attributes);
    const closing = this.closingTag.getClosingTag(tagName);
    return(opening + contents + closing);
  }
}

import { ClosingTag } from "@/generateTag/closingTag";
import { Contents } from "@/generateTag/contents";
import { OpeningTag } from "@/generateTag/openingTag";
import { Element } from "@/generateTag/Element";

/**
 * ペアタグ要素を定義するクラス
 */
export class PairTagElement extends Element {
  public openingTag: OpeningTag;
  public closingTag: ClosingTag;
  public contents: Contents;

  /**
   * ペアタグ要素のインスタンスを生成する
   */
  constructor() {
    super();
    this.openingTag = new OpeningTag();
    this.closingTag = new ClosingTag();
    this.contents = new Contents();
  }

  /**
   * ペアタグ要素を取得する
   * @param tagName タグ名
   * @param contents コンテンツ
   * @returns ペアタグ要素
   */
  public getPairTagElement(tagName: string, contents: string): string {
    const opening = this.openingTag.getOpeningTag(tagName);
    const closing = this.closingTag.getClosingTag(tagName);
    return(opening + contents + closing);
  }
}

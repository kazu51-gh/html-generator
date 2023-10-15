import { Contents } from "@/generateTag/contents";
import { OpeningTag } from "@/generateTag/openingTag";

/**
 * 空要素を定義するクラス
 */
export class EmptyTagElement extends Object {
  public openingTag: OpeningTag;
  public contents: Contents;

  /**
   * 空要素のインスタンスを生成する
   */
  constructor() {
    super();
    this.contents = new Contents();
    this.openingTag = new OpeningTag();
  }

  /**
   * 空要素を取得する
   * @param tagName タグ名
   * @returns 空要素
   */
  public getEmptyTagElement(tagName: string): string {
    const element = this.openingTag.getOpeningTagForEmpty(tagName);
    return(element);
  }
}

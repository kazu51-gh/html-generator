import { ClosingTag } from "@/generateTag/closingTag";
import { Content } from "@/generateTag/content";
import { Element } from "@/generateTag/Element";
import { OpeningTag } from "@/generateTag/openingTag";

/**
 * ペアタグ要素を定義するクラス
 */
export class PairTagElement extends Element {
  private openingTag: OpeningTag;
  private content: Content;
  private closingTag: ClosingTag;

  /**
   * ペアタグ要素のインスタンスを生成する
   */
  constructor(tagName: string, attributes: string[] = [], content: string) {
    super();
    this.openingTag = new OpeningTag(tagName, attributes);
    this.content = new Content(content);
    this.closingTag = new ClosingTag(tagName);
  }

  /**
   * ペアタグ要素を生成する
   * @returns ペアタグ要素
   */
  public getPairTagElement(): string {
    const openingTag = this.openingTag.getOpeningTag();
    const content = this.content.getContent();
    const closingTag = this.closingTag.getClosingTag();
    return(`${openingTag}${content}${closingTag}`);
  }
}

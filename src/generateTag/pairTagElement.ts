import { ClosingTag } from "@/generateTag/closingTag";
import { Content } from "@/generateTag/content";
import { HTMLElement } from "@/generateTag/HTMLElement";
import { OpeningTag } from "@/generateTag/openingTag";

/**
 * 要素(element)を定義するクラス
 */
export class PairTagElement extends HTMLElement {
  private openingTag: OpeningTag;
  private content: Content;
  private closingTag: ClosingTag;

  /**
   * 要素のインスタンスを生成する
   */
  constructor(tagName: string, attributes: string[] = [], content: string) {
    super();
    this.openingTag = new OpeningTag(tagName, attributes);
    this.content = new Content(content);
    this.closingTag = new ClosingTag(tagName);
  }

  /**
   * 要素を生成する
   * @returns 要素
   */
  public generateElement(): string {
    const openingTag = this.openingTag.getOpeningTag();
    const content = this.content.getContent();
    const closingTag = this.closingTag.getClosingTag();
    return(`${openingTag}${content}${closingTag}`);
  }
}

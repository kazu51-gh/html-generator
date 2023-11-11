import { ClosingTag } from "@/generateHTMLElement/closingTag";
import { Content } from "@/generateHTMLElement/content";
import { HTMLElement } from "@/generateHTMLElement/HTMLElement";
import { OpeningTag } from "@/generateHTMLElement/openingTag";

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
    const openingTag = this.openingTag.generateOpeningTag();
    const content = this.content.getContent();
    const closingTag = this.closingTag.generateClosingTag();
    return(openingTag + content + closingTag);
  }
}

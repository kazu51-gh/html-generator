import { Content } from "@/HTMLElementGenerator/content";
import { EndingTag } from "@/HTMLElementGenerator/endingTag";
import { HTMLElement } from "@/HTMLElementGenerator/HTMLElement";
import { StartingTag } from "@/HTMLElementGenerator/startingTag";

/**
 * 通常要素(normal element)を定義するクラス
 */
export class NormalElement extends HTMLElement {
  private startingTag: StartingTag;
  private content: Content;
  private closingTag: EndingTag;

  /**
   * 通常要素のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param content コンテンツ
   */
  constructor(tagName: string, attributes: string[] = [], content: string) {
    super();
    this.startingTag = new StartingTag(tagName, attributes);
    this.content = new Content(content);
    this.closingTag = new EndingTag(tagName);
  }

  /**
   * 通常要素を生成する
   * @returns 通常要素
   */
  public generateElement(): string {
    const startingTag = this.startingTag.generateStartingTag();
    const content = this.content.getContent();
    const closingTag = this.closingTag.generateEndingTag();
    return(startingTag + content + closingTag);
  }
}

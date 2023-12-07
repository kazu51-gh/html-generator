import { Content } from "@/packages/ElementGenerator/content";
import { EndingTag } from "@/packages/ElementGenerator/endingTag";
import { HTMLElement } from "@/packages/ElementGenerator/HTMLElement";
import { StartingTag } from "@/packages/ElementGenerator/startingTag";

/**
 * HTMLの通常要素(normal element)を定義するクラス
 */

export class NormalElement extends HTMLElement {
  private startingTag: StartingTag;
  private content: Content;
  private endingTag: EndingTag;

  /**
   * 通常要素のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param content コンテンツ
   */
  constructor(tagName: string, attributes: string[], content: string) {
    super();
    this.startingTag = new StartingTag(tagName, attributes);
    this.content = new Content(content);
    this.endingTag = new EndingTag(tagName);
  }

  /**
   * 開始タグを取得する
   * @returns 開始タグ
   */
  public getStartingTag(): string {
    const startingTag = this.startingTag.generateStartingTag();
    return startingTag;
  }

  /**
   * コンテンツを取得する
   * @returns コンテンツ
   */
  public getContent(): string {
    const content = this.content.getContent();
    return content;
  }

  /**
   * 終了タグを取得する
   * @returns 終了タグ
   */
  public getEndingTag(): string {
    const endingTag = this.endingTag.generateEndingTag();
    return endingTag;
  }

  /**
   * 通常要素を生成する
   * @returns 通常要素
   */
  public generateElement(): string {
    const startingTag = this.getStartingTag();
    const content = this.getContent();
    const endingTag = this.getEndingTag();
    const element = startingTag + content + endingTag;
    return element;
  }
}

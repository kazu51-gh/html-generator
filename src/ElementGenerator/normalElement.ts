import { Content } from "@/ElementGenerator/content";
import { EndingTag } from "@/ElementGenerator/endingTag";
import { HTMLElement } from "@/ElementGenerator/HTMLElement";
import { StartingTag } from "@/ElementGenerator/startingTag";

/**
 * 通常要素(normal element)を定義するクラス
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
  private getStartingTag(): string {
    return(this.startingTag.generateTag());
  }

  /**
   * コンテンツを取得する
   * @returns コンテンツ
   */
  private getContent(): string {
    return(this.content.getContent());
  }

  /**
   * 終了タグを取得する
   * @returns 終了タグ
   */
  private getEndingTag(): string {
    return(this.endingTag.generateTag());
  }

  /**
   * 通常要素を生成する
   * @returns 通常要素
   */
  public generateElement(): string {
    const element = this.getStartingTag() + this.getContent() + this.getEndingTag();
    return(element);
  }
}

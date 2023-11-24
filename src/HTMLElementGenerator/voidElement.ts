import { HTMLElement } from "@/HTMLElementGenerator/HTMLElement";
import { StartingTag } from "@/HTMLElementGenerator/startingTag";

/**
 * 空要素(void element)を定義するクラス
 */
export class VoidElement extends HTMLElement {
  private startingTag: StartingTag;

  /**
   * 空要素のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   */
  constructor(tagName: string, attributes: string[] = []) {
    super();
    this.startingTag = new StartingTag(tagName, attributes);
  }

  /**
   * 空要素を生成する
   * @returns 空要素
   */
  public generateElement(): string {
    const element = this.startingTag.generateStartingTag();
    return(element);
  }
}

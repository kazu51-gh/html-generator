import { HTMLElement } from "@/packages/ElementGenerator/HTMLElement";
import { StartingTag } from "@/packages/ElementGenerator/startingTag";

/**
 * HTMLの空要素(void element)を定義するクラス
 */

export class VoidElement extends HTMLElement {
  private startingTag: StartingTag;

  /**
   * 空要素のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   */
  constructor(tagName: string, attributes: string[]) {
    super();
    this.startingTag = new StartingTag(tagName, attributes);
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
   * 空要素を生成する
   * @returns 空要素
   */
  public generateElement(): string {
    const element = this.getStartingTag();
    return element;
  }
}

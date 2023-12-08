import { HTMLElementFactory } from "./HTMLElementFactory";
import { VoidElement } from "../ElementGenerator/voidElement";

/**
 * 空要素を作成するクラス
 */
export class VoidElementFactory extends HTMLElementFactory {
  private voidElement: VoidElement;

  /**
   * 空要素作成器のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   */
  constructor(tagName: string, attributes: string[]) {
    super();
    this.voidElement = new VoidElement(tagName, attributes);
  }

  /**
   * 空要素を作成する
   * @returns 空要素
   */
  public createElement(): string {
    const element = this.voidElement.generateElement();
    return element;
  }
}

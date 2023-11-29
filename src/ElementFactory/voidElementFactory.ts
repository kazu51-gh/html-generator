import { HTMLElementFactory } from "@/ElementFactory/HTMLElementFactory";
import { VoidElement } from "@/ElementGenerator/voidElement";

/**
 * 空要素を作成するクラス
 */
export class VoidElementFactory extends HTMLElementFactory {
  private tagName: string;
  private attributes: string[];

  /**
   * 空要素のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   */
  constructor(tagName: string, attributes: string[]) {
    super();
    this.tagName = tagName;
    this.attributes = attributes;
  }

  /**
   * 空要素を作成する
   * @returns 空要素
   */
  public createElement(): string {
    const voidElement = new VoidElement(this.tagName, this.attributes);
    const element = voidElement.generateElement();
    return(element);
  }
}

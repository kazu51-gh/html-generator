import { HTMLElementFactory } from "@/packages/ElementFactory/HTMLElementFactory";
import { NormalElement } from "@/packages/ElementGenerator/normalElement";

/**
 * 通常要素を作成するクラス
 */
export class NormalElementFactory extends HTMLElementFactory {
  private normalElement: NormalElement;

  /**
   * 通常要素作成器のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param content コンテンツ
   */
  constructor(tagName: string, attributes: string[], content: string) {
    super();
    this.normalElement = new NormalElement(tagName, attributes, content);
  }

  /**
   * 通常要素を作成する
   * @returns 通常要素
   */
  public createElement(): string {
    const element = this.normalElement.generateElement();
    return element;
  }
}

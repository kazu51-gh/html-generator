import { HTMLElementFactory } from "@/ElementFactory/HTMLElementFactory";
import { NormalElement } from "@/ElementGenerator/normalElement";

/**
 * 通常要素を作成するクラス
 */
export class NormalElementFactory extends HTMLElementFactory {
  protected tagName: string;
  protected attributes: string[];
  private content: string;

  /**
   * 通常要素のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param content コンテンツ
   */
  constructor(tagName: string, attributes: string[] = [], content: string) {
    super();
    this.tagName = tagName;
    this.attributes = attributes;
    this.content = content;
  }

  /**
   * 通常要素を作成する
   * @returns 通常要素
   */
  createElement(): string {
    const normalElement = new NormalElement(this.tagName, this.attributes, this.content);
    const element = normalElement.generateElement();
    return(element);
  }
}

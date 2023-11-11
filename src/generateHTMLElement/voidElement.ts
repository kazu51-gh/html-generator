import { HTMLElement } from "@/generateHTMLElement/HTMLElement";
import { OpeningTag } from "@/generateHTMLElement/openingTag";

/**
 * 空要素(void element)を定義するクラス
 */
export class VoidElement extends HTMLElement {
  private openingTag: OpeningTag;

  /**
   * 空要素のインスタンスを生成する
   */
  constructor(tagName: string, attributes: string[] = []) {
    super();
    this.openingTag = new OpeningTag(tagName, attributes);
  }

  /**
   * 空要素を生成する
   * @param tagName タグ名
   * @returns 空要素
   */
  public generateVoidElement(): string {
    const openingTag = this.openingTag.generateOpeningTag();
    return(openingTag);
  }
}

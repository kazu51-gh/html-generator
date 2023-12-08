import { Attribute } from "@/packages/ElementGenerator/attribute";
import { Tag } from "@/packages/ElementGenerator/tag";

/**
 * HTMLの開始タグ(starting tag)を定義するクラス
 */
export class StartingTag extends Tag {
  private attribute: Attribute;

  /**
   * 開始タグのインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   */
  constructor(tagName: string, attributes: string[]) {
    super(tagName);
    this.attribute = new Attribute(attributes);
  }

  /**
   * 開始タグを生成する
   * @returns 開始タグ
   */
  public generateStartingTag(): string {
    const lessThan = this.getLessThan();
    const attribute = this.attribute.getAttribute();
    const tagName = this.getTagName();
    const greaterThan = this.getGreaterThan();

    if (attribute === '') { return lessThan + tagName + greaterThan; }
    return `${lessThan}${tagName} ${attribute}${greaterThan}`;
  }
}

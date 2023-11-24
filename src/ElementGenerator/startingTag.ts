import { Attribute } from "@/ElementGenerator/attribute";
import { Tag } from "@/ElementGenerator/tag";

/**
 * 開始タグ(starting tag)を定義するクラス
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
   * 小なり文字(<)を取得する
   * @returns 小なり文字
   */
  getLessThan(): string {
    return(this.lessThan);
  }

  /**
   * 大なり文字(>)を取得する
   * @returns 大なり文字
   */
  getGreaterThan(): string {
    return(this.greaterThan);
  }

  /**
   * タグ名を取得する
   * @returns タグ名
   */
  getTagName(): string {
    return(this.tagName);
  }

  /**
   * 属性群を取得する
   * @returns 属性群
   */
  private getAttributes(): string {
    return(this.attribute.generateConnectedAttributes());
  }

  /**
   * 開始タグを生成する
   * @returns 開始タグ
   */
  public generateStartingTag(): string {
    const lessThan = this.getLessThan();
    const tagName = this.getTagName();
    const attributes = this.getAttributes();
    const greaterThan = this.getGreaterThan();

    if (attributes === '') { return(lessThan + tagName + greaterThan); }
    return(`${lessThan}${tagName} ${attributes}${greaterThan}`);
  }
}

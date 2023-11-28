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
   * 開始タグの最初の文字を取得する
   * @returns 小なり文字
   */
  protected getLessThan(): string {
    return(this.lessThan);
  }

  /**
   * タグ名を取得する
   * @returns タグ名
   */
  protected getTagName(): string {
    return(this.tagName);
  }

  /**
   * 属性群を取得する
   * @returns 属性群
   */
  private getAttributes(): string {
    const attributes = this.attribute.getAttributes();
    return(attributes);
  }

  /**
   * 開始タグの最後の文字を取得する
   * @returns 大なり文字
   */
  protected getGreaterThan(): string {
    return(this.greaterThan);
  }

  /**
   * 開始タグを生成する
   * @returns 開始タグ
   */
  public generateTag(): string {
    const lessThan = this.getLessThan();
    const tagName = this.getTagName();
    const attributes = this.getAttributes();
    const greaterThan = this.getGreaterThan();

    if (attributes === '') { return(lessThan + tagName + greaterThan); }
    return(`${lessThan}${tagName} ${attributes}${greaterThan}`);
  }
}

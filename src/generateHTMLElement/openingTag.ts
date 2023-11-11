import { Attribute } from "@/generateHTMLElement/attribute";
import { Tag } from "@/generateHTMLElement/tag";

/**
 * 開始タグ(opening tag)を定義するクラス
 */
export class OpeningTag extends Tag {
  private readonly lessThan: string = '<';
  private readonly greaterThan: string = '>';
  private attribute: Attribute;
  private tagName: string;
  
  /**
   * 開始タグのインスタンスを生成する
   */
  constructor(tagName: string, attributes: string[]) {
    super();
    this.tagName = tagName;
    this.attribute = new Attribute(attributes);
  }

  /**
   * 小なり文字(<)を取得する
   * @returns 小なり文字(<)
   */
  private getLessThan(): string {
    return(this.lessThan);
  }

  /**
   * タグ名を取得する
   * @returns タグ名
   */
  private getTagName(): string {
    return(this.tagName);
  }

  /**
   * 属性群を取得する
   * @returns 属性群
   */
  private getAttributes(): string {
    return(this.attribute.getAttribute());
  }

  /**
   * 大なり文字(>)を取得する
   * @returns 大なり文字(>)
   */
  private getGreaterThan(): string {
    return(this.greaterThan);
  }

  /**
   * 開始タグを生成する
   * @returns 開始タグ
   */
  public generateOpeningTag(): string {
    const lessThan = this.getLessThan();
    const tagName = this.getTagName();
    const attribute = this.getAttributes();
    const greaterThan = this.getGreaterThan();

    if (attribute === '') { return(lessThan + tagName + greaterThan); }
    return(`${lessThan}${tagName} ${attribute}${greaterThan}`);
  }
}

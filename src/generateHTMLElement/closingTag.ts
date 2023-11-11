import { Tag } from "@/generateHTMLElement/tag";

/**
 * 終了タグ(closing tag)を定義するクラス
 */
export class ClosingTag extends Tag {
  private readonly lessThan: string = '<';
  private readonly slash: string = '/';
  private readonly greaterThan: string = '>';
  private tagName: string;
  
  /**
   * 終了タグのインスタンスを生成する
   */
  constructor(tagName: string) {
    super();
    this.tagName = tagName;
  }

  /**
   * 小なり文字(<)を取得する
   * @returns 小なり文字
   */
  private getLessThan(): string {
    return(this.lessThan);
  }

  /**
   * スラッシュ(/)を取得する
   * @returns スラッシュ
   */
  private getSlash(): string {
    return(this.slash);
  }

  /**
   * タグ名を取得する
   * @returns タグ名
   */
  private getTagName(): string {
    return(this.tagName);
  }

  /**
   * 大なり文字(>)を取得する
   * @returns 大なり文字
   */
  private getGreaterThan(): string {
    return(this.greaterThan);
  }

  /**
   * 終了タグを生成する
   * @returns 終了タグ
   */
  public generateClosingTag(): string {
    const lessThan = this.getLessThan();
    const slash = this.getSlash();
    const tagName = this.getTagName();
    const greaterThan = this.getGreaterThan();
    return(lessThan + slash + tagName + greaterThan);
  }
}

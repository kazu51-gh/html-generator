import { Tag } from "@/generateTag/tag";

/**
 * 終了タグ(closing tag)を定義するクラス
 */
export class ClosingTag extends Tag {
  private greaterThan: string;
  private lessThan: string;
  private slash: string;
  
  /**
   * 終了タグのインスタンスを生成する
   */
  constructor() {
    super();
    this.lessThan = '<';
    this.slash = '/';
    this.greaterThan = '>';
  }

  /**
   * 大なり文字(>)を取得する
   * @returns 大なり文字(>)
   */
  private getGreaterThan(): string {
    return this.greaterThan;
  }

  /**
   * 小なり文字(<)を取得する
   * @returns 小なり文字(<)
   */
  private getLessThan(): string {
    return this.lessThan;
  }

  /**
   * スラッシュ(/)を取得する
   * @returns スラッシュ(/)
   */
  private getSlash(): string {
    return this.slash;
  }

  /**
   * 終了タグを取得する
   * @param tagName タグ名
   * @returns 終了タグ
   */
  public getClosingTag(tagName: string): string {
    const lessThan = this.getLessThan();
    const slash = this.getSlash();
    const greaterThan = this.getGreaterThan();
    return(lessThan + slash + tagName + greaterThan);
  }
}

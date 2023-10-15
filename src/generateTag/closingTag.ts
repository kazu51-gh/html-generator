/**
 * 閉じタグを定義するクラス
 */
export class ClosingTag extends Object {
  public greaterThan: string;
  public lessThan: string;
  public slash: string;
  
  /**
   * 閉じタグのインスタンスを生成する
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
  public getGreaterThan(): string {
    return this.greaterThan;
  }

  /**
   * 小なり文字(<)を取得する
   * @returns 小なり文字(<)
   */
  public getLessThan(): string {
    return this.lessThan;
  }

  /**
   * スラッシュ(/)を取得する
   * @returns スラッシュ(/)
   */
  public getSlash(): string {
    return this.slash;
  }

  /**
   * 閉じタグを取得する
   * @param tagName タグ名
   * @returns 閉じタグ
   */
  public getClosingTag(tagName: string): string {
    const lessThan = this.getLessThan();
    const slash = this.getSlash();
    const greaterThan = this.getGreaterThan();
    return(lessThan + slash + tagName + greaterThan);
  }
}

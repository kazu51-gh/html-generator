/**
 * 開始タグを定義するクラス
 */
export class OpeningTag extends Object {
  public greaterThan: string;
  public lessThan: string;
  public slash: string;
  
  /**
   * 開始タグのインスタンスを生成する
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
   * ペアタグ要素の開始タグを取得する
   * @param tagName タグ名
   * @returns 開始タグ
   */
  public getOpeningTag(tagName: string): string {
    const lessThan = this.getLessThan();
    const greaterThan = this.getGreaterThan();
    return(lessThan + tagName + greaterThan);
  }

  /**
   * 空要素の開始タグを取得する
   * @param tagName タグ名
   * @returns 開始タグ
   */
  public getOpeningTagForEmpty(tagName: string): string {
    const lessThan = this.getLessThan();
    const slash = this.getSlash();
    const greaterThan = this.getGreaterThan();
    return(lessThan + tagName + ' ' + slash + greaterThan);
  }
}

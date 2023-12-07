/**
 * HTMLのタグ(tag)を定義するクラス
 */

export class Tag extends Object {
  private readonly lessThan: string = '<';
  private readonly greaterThan: string = '>';
  private tagName: string;

  /**
   * タグのインスタンスを生成する
   * @param tagName タグ名
   */
  constructor(tagName: string) {
    super();
    this.tagName = tagName;
  }

  /**
   * 開始タグおよび終了タグの最初の文字を返す
   * @returns 最初の文字
   */
  public getLessThan(): string {
    return this.lessThan;
  }

  /**
   * 開始タグおよび終了タグのタグ名を返す
   * @returns タグ名
   */
  public getTagName(): string {
    return this.tagName;
  }

  /**
   * 開始タグおよび終了タグの最後の文字を返す
   * @returns 最後の文字
   */
  public getGreaterThan(): string {
    return this.greaterThan;
  }
}
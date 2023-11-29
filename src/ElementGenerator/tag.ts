/**
 * タグ(tag)を定義する抽象クラス
 */
export abstract class Tag extends Object {
  protected readonly lessThan: string = '<';
  protected readonly greaterThan: string = '>';
  protected tagName: string;

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
   */
  protected abstract getLessThan(): string;

  /**
   * 開始タグおよび終了タグのタグ名を返す
   */
  protected abstract getTagName(): string;

  /**
   * 開始タグおよび終了タグの最後の文字を返す
   */
  protected abstract getGreaterThan(): string;

  /**
   * タグを生成する
   */
  public abstract generateTag(): string;
}

/**
 * HTMLのコンテンツ(content)を定義するクラス
 */
export class Content extends Object {
  private content: string;

  /**
   * コンテンツのインスタンスを生成する
   * @param content コンテンツ
   */
  constructor(content: string) {
    super();
    this.content = content;
  }

  /**
   * コンテンツを取得する
   * @returns コンテンツ
   */
  public getContent(): string {
    return this.content;
  }
}

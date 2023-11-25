/**
 * コンテンツ(content)を定義するクラス
 */
export class Content extends Object {
  private content: string;

  /**
   * コンテンツのインスタンスを生成する
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
    return(this.content);
  }
}

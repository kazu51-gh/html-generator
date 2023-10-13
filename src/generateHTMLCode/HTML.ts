/**
 * HTMLを生成するクラス
 */

export class HTML extends Object {
  public startingTag: string;
  public endingTag: string;

  /**
   * HTMLの開始タグと終了タグを指定
   * @param startingTag 開始タグ
   * @param endingTag 終了タグ
   */
  constructor(startingTag: string, endingTag: string) {
    super();
    this.startingTag = startingTag;
    this.endingTag = endingTag;
  }

  /**
   * HTMLの基礎コードを生成する
   * @returns 生成したコード
   */
  protected generateCode(): string {
    return(this.startingTag + this.endingTag);
  }
}

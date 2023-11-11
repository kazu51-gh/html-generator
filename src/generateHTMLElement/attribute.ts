/**
 * 属性(attribute)を定義するクラス
 */
export class Attribute extends Object {
  private attributes: string[];

  /**
   * 属性のインスタンスを生成する
   */
  constructor(attributes: string[] = []) {
    super();
    this.attributes = attributes;
  }

  /**
   * 属性群をスペース繋ぎで取得する
   * 空配列の場合は何もない文字列を返す
   * @returns 属性群
   */
  public getAttribute(): string {
    if (this.attributes.length === 0) { return(''); }
    return(this.attributes.join(' '));
  }
}

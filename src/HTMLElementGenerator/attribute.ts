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
   * スペースで繋がれた属性群を生成する
   * 空配列の場合は何もない文字列を返す
   * @returns 属性群
   */
  public generateConnectedAttributes(): string {
    const attributes = this.attributes;
    if (attributes.length === 0) { return(''); }
    return(attributes.join(' '));
  }
}

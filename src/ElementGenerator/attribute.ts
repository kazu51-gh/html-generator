/**
 * 属性(attribute)を定義するクラス
 */
export class Attribute extends Object {
  private attributes: string[];

  /**
   * 属性のインスタンスを生成する
   * @param attributes 属性群
   */
  constructor(attributes: string[]) {
    super();
    this.attributes = attributes;
  }

  /**
   * 属性群を取得する
   * @returns 属性群
   */
  public getAttributes(): string {
    const tagAttributes = this.createConnectedAttributes();
    return(tagAttributes);
  }

  /**
   * スペース繋ぎの属性群を作成する
   * 空配列の場合は空文字列を返す
   * @returns 属性群
   */
  private createConnectedAttributes(): string {
    if (this.attributes.length === 0) { return(''); }
    return(this.attributes.join(' '));
  }
}

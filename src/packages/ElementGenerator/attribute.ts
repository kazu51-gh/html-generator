/**
 * HTMLの属性(attribute)を定義するクラス
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
   * 属性を取得する
   * @returns 属性
   */
  public getAttribute(): string {
    const attribute = this.createConnectedAttribute();
    return attribute;
  }

  /**
   * 属性群から属性を作成する
   * 属性群に値がない(属性を付与しない)なら空属性(空文字列)を返す
   * @returns 属性
   */
  private createConnectedAttribute(): string {
    if (this.attributes.length === 0) { return ''; }
    return this.attributes.join(' ');
  }
}

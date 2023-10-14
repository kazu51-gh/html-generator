/**
 * HTMLのタグを定義するクラス
 */

export class Tag extends Object {
  public lessThan: string;
  public greaterThan: string;

  constructor(lessThan: string = '<', greaterThan: string = '>') {
    super();
    this.lessThan = lessThan;
    this.greaterThan = greaterThan;
  }
}

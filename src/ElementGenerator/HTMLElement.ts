/**
 * HTML要素(HTML element)を定義する抽象クラス
 */
export abstract class HTMLElement extends Object {

  /**
   * HTML要素のインスタンスを生成する
   */
  constructor() {
    super();
  }

  /**
   * HTML要素を生成して返す
   */
  public abstract generateElement(): string;
}

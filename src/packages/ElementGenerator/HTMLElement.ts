/**
 * HTMLの要素(element)を定義するクラス
 */

export abstract class HTMLElement extends Object {
  
  /**
   * HTML要素を生成して返す
   */
  public abstract generateElement(): string;
}

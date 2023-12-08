/**
 * HTML要素を作成するクラスの抽象クラス
 */
export abstract class HTMLElementFactory extends Object {

  /**
   * HTML要素を作成して返す
   */
  public abstract createElement(): string;
}

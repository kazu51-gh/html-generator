/**
 * HTML要素を生成するクラスの抽象クラス
 */
export abstract class HTMLElementFactory extends Object {
  
  /**
   * HTML要素作成のインスタンスを生成する
   */
  constructor() {
    super();
  }

  /**
   * HTML要素を作成して返す
   */
  public abstract createElement(): string;
}

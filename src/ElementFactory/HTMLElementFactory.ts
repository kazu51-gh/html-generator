/**
 * HTML要素を生成するクラスの抽象クラス
 */
export abstract class HTMLElementFactory extends Object {
  
  /**
   * 要素作成のインスタンスを生成する
   */
  constructor() {
    super();
  }

  /**
   * 要素を作成して返す
   */
  abstract createElement(): string;
}

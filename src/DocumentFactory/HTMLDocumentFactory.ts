/**
 * HTML文書を生成するクラスの抽象クラス
 */
export abstract class HTMLDocumentFactory extends Object {

  /**
   * HTML文書生成のインスタンスを生成する
   */
  constructor() {
    super();
  }

  /**
   * 文書に必要な要素群を生成する
   */
  abstract create(): string;
}
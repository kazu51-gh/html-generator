import { NormalElementFactory } from "@/ElementFactory/normalElementFactory";

/**
 * body要素を作成するクラス
 */
export class BodyElementFactory extends Object {
  private bodyContentData: string;

  /**
   * body要素のインスタンスを生成する
   * @param bodyContentData body要素のコンテンツになる要素群
   */
  constructor(bodyContentData: string) {
    super();
    this.bodyContentData = bodyContentData;
  }

  /**
   * body要素を作成する
   * @returns body要素
   */
  public createElement(): string {
    const content = this.createBodyContent();
    const normalElementFactory = new NormalElementFactory('body', [], content);
    const element = normalElementFactory.createElement();
    return(element);
  }

  /**
   * body要素のコンテンツを作成する
   * @returns body要素のコンテンツ
   */
  private createBodyContent(): string {
    const content = '\r\n' + this.bodyContentData + '\r\n\t';
    return(content);
  }
}

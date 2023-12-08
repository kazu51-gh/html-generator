import { HTMLElementFactory } from "@/packages/ElementFactory/HTMLElementFactory";
import { NormalElementFactory } from "@/packages/ElementFactory/normalElementFactory";

/**
 * HTML文書のbody要素を作成するクラス
 */
export class BodyElementFactory extends HTMLElementFactory {
  private bodyFactory: NormalElementFactory;

  /**
   * body要素作成器のインスタンスを生成する
   * @param contentData コンテンツになる要素群
   */
  constructor(contentData: string) {
    super();
    const bodyContent = this.createBodyContent(contentData);
    this.bodyFactory = new NormalElementFactory('body', [], bodyContent);
  }

  /**
   * body要素のコンテンツを作成する
   * @param contentData コンテンツになる要素群
   * @returns コンテンツ
   */
  public createBodyContent(contentData: string): string {
    const bodyContent = '\r\n' + contentData + '\r\n\t';
    return bodyContent;
  }

  /**
   * body要素を作成する
   * @returns body要素
   */
  public createElement(): string {
    const element = this.bodyFactory.createElement();
    return element;
  }
}

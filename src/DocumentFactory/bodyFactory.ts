import { HTMLDocumentFactory } from "@/DocumentFactory/HTMLDocumentFactory";
import { NormalElementFactory } from "@/ElementFactory/normalElementFactory";

/**
 * HTML文書のbody部を生成するクラス
 */
export class BodyFactory extends HTMLDocumentFactory {
  private content: string;

  /**
   * HTML文書のbody部生成のインスタンスを生成する
   * @param content コンテンツ
   */
  constructor(content: string) {
    super();
    this.content = content;
  }

  /**
   * HTMLのbody部を作成する
   * @returns body部
   */
  create(): string {
    const bodyContent = '\r\n' + this.content + '\r\n\t';
    const body = this.createBody(bodyContent);
    return(body);
  }

  /**
   * body要素を作成する
   * @param bodyContent body部のコンテンツ
   * @returns body要素
   */
  private createBody(bodyContent: string): string {
    const normalElementFactory = new NormalElementFactory('body', [], bodyContent);
    const element = normalElementFactory.createElement();
    return(element);
  }
}
import { BodyElementFactory } from "@/DocumentFactory/bodyElementFactory";
import { HeadElementFactory } from "@/DocumentFactory/headElementFactory";
import { NormalElementFactory } from "@/ElementFactory/normalElementFactory";

/**
 * HTML文書を作成するクラス
 */
export class HTMLDocumentFactory extends Object {
  private readonly doctype: string = '<!DOCTYPE html>';
  private bodyElementFactory: BodyElementFactory;
  private headElementFactory: HeadElementFactory;

  /**
   * HTML文書作成のインスタンスを生成する
   * @param bodyContentData body要素のコンテンツになる要素群
   * @param title ページタイトル
   * @param description ページ説明
   */
  constructor(bodyContentData: string, title: string, description: string) {
    super();
    this.bodyElementFactory = new BodyElementFactory(bodyContentData);
    this.headElementFactory = new HeadElementFactory(title, description);
  }

  /**
   * HTML文書を作成する
   * @returns HTML文書
   */
  public createDocument(): string {
    const headElement = this.headElementFactory.createElement();
    const bodyElement = this.bodyElementFactory.createElement();
    const htmlContent = '\r\n\t' + headElement + '\r\n\t' + bodyElement + '\r\n';
    const normalElementFactory = new NormalElementFactory('html', ['lang="ja"'], htmlContent);
    const htmlElement = normalElementFactory.createElement();
    const htmlDocument = this.doctype + '\r\n' + htmlElement;
    return(htmlDocument);
  }
}

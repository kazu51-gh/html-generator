import { BodyElementFactory } from "./bodyElementFactory";
import { HeadElementFactory } from "./headElementFactory";
import { NormalElementFactory } from "../ElementFactory/normalElementFactory";

/**
 * HTML文書を作成するクラス
 */
export class HTMLDocumentFactory extends Object {
  private readonly doctype: string = '<!DOCTYPE html>';
  private bodyFactory: BodyElementFactory;
  private headFactory: HeadElementFactory;
  private htmlFactory: NormalElementFactory;

  /**
   * HTML文書作成器のインスタンスを生成する
   * @param pageTitle ページタイトル
   * @param pageDescription ページ説明
   * @param contentData body要素のコンテンツになる要素群
   */
  constructor(pageTitle: string, pageDescription: string, contentData: string) {
    super();
    this.headFactory = new HeadElementFactory(pageTitle, pageDescription);
    this.bodyFactory = new BodyElementFactory(contentData);
    const htmlContent = this.createHtmlContent();
    this.htmlFactory = new NormalElementFactory('html', ['lang="ja"'], htmlContent);
  }

  /**
   * html要素のコンテンツを作成する
   * @returns コンテンツ
   */
  public createHtmlContent(): string {
    const headElement = this.headFactory.createElement();
    const bodyElement = this.bodyFactory.createElement();
    const htmlContent = '\r\n\t' + headElement + '\r\n\t' + bodyElement + '\r\n';
    return htmlContent;
  }

  /**
   * HTML文書を作成する
   * @returns HTML文書
   */
  public createDocument(): string {
    const htmlElement = this.htmlFactory.createElement();
    const document = this.doctype + '\r\n' + htmlElement;
    return document;
  }
}

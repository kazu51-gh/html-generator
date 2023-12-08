import { BodyElementFactory } from "@/packages/DocumentFactory/bodyElementFactory";
import { HeadElementFactory } from "@/packages/DocumentFactory/headElementFactory";
import { NormalElementFactory } from "@/packages/ElementFactory/normalElementFactory";

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
    const head = this.createHeadElement();
    const body = this.createBodyElement();
    const htmlContent = '\r\n\t' + head + '\r\n\t' + body + '\r\n';
    return htmlContent;
  }

  /**
   * head要素を作成する
   * @returns head要素
   */
  public createHeadElement(): string {
    const element = this.headFactory.createElement();
    return element;
  }

  /**
   * body要素を作成する
   * @returns body要素
   */
  public createBodyElement(): string {
    const element = this.bodyFactory.createElement();
    return element;
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

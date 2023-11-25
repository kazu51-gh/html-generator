import { BodyFactory } from "@/DocumentFactory/bodyFactory";
import { HeadFactory } from "@/DocumentFactory/headFactory";
import { NormalElementFactory } from "@/ElementFactory/normalElementFactory";

/**
 * HTML文書を作成するクラス
 */
export class CreateHTMLDocument extends Object {
  private readonly doctype: string = '<!DOCTYPE html>';
  private pageTitle: string;
  private pageDescription: string;
  private bodyContent: string;

  /**
   * HTML文書作成のインスタンスを生成する
   * @param pageTitle ページタイトル
   * @param pageDescription ページ説明
   * @param bodyContent body部のコンテンツ
   */
  constructor(pageTitle: string, pageDescription: string, bodyContent: string) {
    super();
    this.pageTitle = pageTitle;
    this.pageDescription = pageDescription;
    this.bodyContent = bodyContent;
  }

  /**
   * HTML文書を作成する
   * @returns HTML文書
   */
  public create(): string {
    const headFactory = new HeadFactory(this.pageTitle, this.pageDescription);
    const head = headFactory.createForHTML();
    const bodyFactory = new BodyFactory(this.bodyContent);
    const body = bodyFactory.create();
    const htmlContents = '\r\n\t' + head + '\r\n\t' + body + '\r\n';
    const normalElementFactory = new NormalElementFactory('html', ['lang="ja"'], htmlContents);
    const html = normalElementFactory.createElement();
    const htmlDocument = this.doctype + '\r\n' + html;
    return(htmlDocument);
  }
}
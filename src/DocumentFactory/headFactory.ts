import { HTMLDocumentFactory } from "@/DocumentFactory/HTMLDocumentFactory";
import { NormalElementFactory } from "@/ElementFactory/normalElementFactory";
import { VoidElementFactory } from "@/ElementFactory/voidElementFactory";

/**
 * HTML文書のhead部を生成するクラス
 */
export class HeadFactory extends HTMLDocumentFactory {
  private title: string;
  private description: string;

  /**
   * head部生成のインスタンスを生成する
   * @param title ページタイトル
   * @param description ページ説明
   */
  constructor(title: string, description: string) {
    super();
    this.title = title;
    this.description = description;
  }

  /**
   * head部作成ページのコードを作成する
   * @returns head部
   */
  create(): string {
    const charset = this.createCharset();
    const pageDescription = this.createDescription();
    const pageTitle = this.createTitle();
    const headContents = '\r\n\t' + charset + '\r\n\t' + pageDescription + '\r\n\t' + pageTitle + '\r\n';
    const head = this.createHead(headContents);
    return(head);
  }

  /**
   * HTML文書のhead部を作成する
   * @returns head部
   */
  public createForHTML(): string {
    const charset = this.createCharset();
    const pageDescription = this.createDescription();
    const pageTitle = this.createTitle();
    const headContents = '\r\n\t\t' + charset + '\r\n\t\t' + pageDescription + '\r\n\t\t' + pageTitle + '\r\n\t';
    const head = this.createHead(headContents);
    return(head);
  }

  /**
   * head部のcharsetを定義するmeta要素を作成する
   * @returns charsetのmeta要素
   */
  private createCharset(): string {
    const voidElementFactory = new VoidElementFactory('meta', ['charset="utf-8"']);
    const element = voidElementFactory.createElement();
    return(element);
  }

  /**
   * head部のページ説明を定義するmeta要素を作成する
   * @returns ページ説明のmeta要素
   */
  private createDescription(): string {
    const voidElementFactory = new VoidElementFactory('meta', ['name="description"', `content="${this.description}"`]);
    const element = voidElementFactory.createElement();
    return(element);
  }

  /**
   * head部のtitle要素を作成する
   * @returns title要素
   */
  private createTitle(): string {
    const normalElementFactory = new NormalElementFactory('title', [], this.title);
    const element = normalElementFactory.createElement();
    return(element);
  }

  /**
   * head要素を作成する
   * @param headContents head部のコンテンツ
   * @returns head要素
   */
  private createHead(headContents: string): string {
    const normalElementFactory = new NormalElementFactory('head', [], headContents);
    const element = normalElementFactory.createElement();
    return(element);
  }
}
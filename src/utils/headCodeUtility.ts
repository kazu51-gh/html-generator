import { NormalElementFactory } from "@/packages/ElementFactory/normalElementFactory";
import { VoidElementFactory } from "@/packages/ElementFactory/voidElementFactory";

/**
 * ページ情報設定画面のhead部コードを作成するユーティリティクラス
 */
export class HeadCodeUtility extends Object {
  private title: string;
  private description: string;

  /**
   * head要素のインスタンスを生成する
   * @param title ページタイトル
   * @param description ページ説明
   */
  constructor(title: string, description: string) {
    super();
    this.title = title;
    this.description = description;
  }

  /**
   * head要素を作成する
   * @returns head要素
   */
  public createElement(): string {
    const content = this.createHeadContent();
    const normalElementFactory = new NormalElementFactory('head', [], content);
    const element = normalElementFactory.createElement();
    return(element);
  }

  /**
   * head要素のコンテンツを作成する
   * @returns head要素のコンテンツ
   */
  private createHeadContent(): string {
    const charset = this.createCharset();
    const pageDescription = this.createDescription();
    const pageTitle = this.createTitle();
    const content = '\r\n\t' + charset + '\r\n\t' + pageDescription + '\r\n\t' + pageTitle + '\r\n';
    return(content);
  }

  /**
   * head要素のcharsetを定義するmeta要素を作成する
   * @returns charsetのmeta要素
   */
  private createCharset(): string {
    const voidElementFactory = new VoidElementFactory('meta', ['charset="utf-8"']);
    const element = voidElementFactory.createElement();
    return(element);
  }

  /**
   * head要素のページ説明を定義するmeta要素を作成する
   * @returns ページ説明のmeta要素
   */
  private createDescription(): string {
    const voidElementFactory = new VoidElementFactory('meta', ['name="description"', `content="${this.description}"`]);
    const element = voidElementFactory.createElement();
    return(element);
  }

  /**
   * head要素のtitle要素を作成する
   * @returns title要素
   */
  private createTitle(): string {
    const normalElementFactory = new NormalElementFactory('title', [], this.title);
    const element = normalElementFactory.createElement();
    return(element);
  }
}

import { HTMLElementFactory } from "@/packages/ElementFactory/HTMLElementFactory";
import { NormalElementFactory } from "@/packages/ElementFactory/normalElementFactory";
import { VoidElementFactory } from "@/packages/ElementFactory/voidElementFactory";

/**
 * HTML文書のhead要素を作成するクラス
 */
export class HeadElementFactory extends HTMLElementFactory {
  private charsetFactory: VoidElementFactory;
  private descriptionFactory: VoidElementFactory;
  private headFactory: NormalElementFactory;
  private titleFactory: NormalElementFactory;

  /**
   * head要素作成器のインスタンスを生成する
   * @param pageTitle ページタイトル
   * @param pageDescription ページ説明
   */
  constructor(pageTitle: string, pageDescription: string) {
    super();
    this.charsetFactory = new VoidElementFactory('meta', ['charset="utf-8"']);
    this.descriptionFactory = new VoidElementFactory('meta', ['name="description"', `content="${pageDescription}"`]);
    this.titleFactory = new NormalElementFactory('title', [], pageTitle);
    const headContent = this.createHeadContent();
    this.headFactory = new NormalElementFactory('head', [], headContent);
  }

  /**
   * head要素のコンテンツを作成する
   * @returns コンテンツ
   */
  public createHeadContent(): string {
    const charset = this.createCharset();
    const description = this.createDescription();
    const title = this.createTitleElement();
    const headContent = '\r\n\t\t' + charset + '\r\n\t\t' + description + '\r\n\t\t' + title + '\r\n\t';
    return headContent;
  }

  /**
   * charsetを定義するmeta要素を作成する
   * @returns charsetのmeta要素
   */
  public createCharset(): string {
    const element = this.charsetFactory.createElement();
    return element;
  }

  /**
   * descriptionを定義するmeta要素を作成する
   * @returns descriptionのmeta要素
   */
  public createDescription(): string {
    const element = this.descriptionFactory.createElement();
    return element;
  }

  /**
   * title要素を作成する
   * @returns タイトル要素
   */
  public createTitleElement(): string {
    const element = this.titleFactory.createElement();
    return element;
  }

  /**
   * head要素を作成する
   * @returns head要素
   */
  public createElement(): string {
    const element = this.headFactory.createElement();
    return element;
  }
}

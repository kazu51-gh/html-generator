import { HTMLElementFactory } from "../ElementFactory/HTMLElementFactory";
import { NormalElementFactory } from "../ElementFactory/normalElementFactory";
import { VoidElementFactory } from "../ElementFactory/voidElementFactory";

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
    const charset = this.charsetFactory.createElement();
    const description = this.descriptionFactory.createElement();
    const titleElement = this.titleFactory.createElement();
    const headContent = '\r\n\t\t' + charset + '\r\n\t\t' + description + '\r\n\t\t' + titleElement + '\r\n\t';
    return headContent;
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

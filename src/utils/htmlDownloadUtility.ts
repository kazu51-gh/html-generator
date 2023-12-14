import { HTMLDocumentFactory } from "@/packages/DocumentFactory/HTMLDocumentFactory";

/**
 * HTML文書をダウンロードするためのユーティリティクラス
 */
export class HTMLDownloadUtility extends Object {
  private title: string;
  private description: string;
  private codeData: string;

  /**
   * HTML文書をダウンロードするクラスのインスタンスを生成する
   * @param title ページタイトル
   * @param description ページ説明
   * @param codeData コードデータ
   */
  constructor(title: string, description: string, codeData: string) {
    super();
    this.title = title;
    this.description = description;
    this.codeData = codeData;
  }

  /**
   * body要素のコンテンツを作成する
   * @param bodyContentList body要素のコンテンツになる内容のリスト
   * @returns body要素のコンテンツ
   */
  public createBodyContent(bodyContentList: string[]): string {
    const bodyContent = bodyContentList.join('\r\n');
    return bodyContent;
  }

  /**
   * body要素のコンテンツになる内容のリストを作成する
   * @param splitContents コンテンツ
   * @returns body要素のコンテンツになる内容のリスト
   */
  public createBodyContentList(splitContents: string[]): string[] {
    let bodyContentList: string[] = [];

    [...Array(splitContents.length)].forEach((_, i) => {
      const content: string = '\t\t' + splitContents[i];
      if (content !== '\t\tundefined') { bodyContentList.push(content); }
    });
    return bodyContentList;
  }

  /**
   * HTML文書をダウンロードする
   */
  public downloadHTMLDocument() {
    const splitContents = this.splitData();
    const bodyContentList = this.createBodyContentList(splitContents);
    const bodyContent = this.createBodyContent(bodyContentList);
    const documentFactory = new HTMLDocumentFactory(this.title, this.description, bodyContent);
    const html = documentFactory.createDocument();
    const downloadData = new Blob([html], {type: 'text/html'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(downloadData);
    link.download = 'sample.html';
    link.click();
    console.log('finish download');
  }

  /**
   * コンテンツを改行コードで分割する
   * @returns 分割されたコンテンツ
   */
  public splitData(): string[] {
    const splitContents = this.codeData.split('\n');
    return splitContents;
  }
}

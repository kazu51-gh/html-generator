import { NormalElementFactory } from "@/packages/ElementFactory/normalElementFactory";

/**
 * HTMLに関するユーティリティクラス
 */
export class HTMLUtility extends Object {
  private static readonly doctype: string = '<!DOCTYPE html>';
  private static readonly htmlText: string = '(ここにコンテンツを記述していく)';
  private static readonly headText: string = '(ページ情報やリンク等をここに記述)';
  private static readonly bodyText: string = '(表示したいコンテンツをここに記述)';

  /**
   * HTMLDescriptionのstep2に表示するコードを取得する
   * @returns 例コード
   */
  public static getStep2(): string {
    const content = '\r\n\t' + HTMLUtility.htmlText + '\r\n';
    const normalElementFactory = new NormalElementFactory('html', [], content);
    const element = normalElementFactory.createElement();
    const code = HTMLUtility.doctype + '\r\n' + element;
    return(code);
  }

  /**
   * HTMLDescriptionのstep3に表示するコードを取得する
   * @returns 例コード
   */
  public static getStep3(): string {
    // head部作成
    const headContent = '\r\n\t\t' + HTMLUtility.headText + '\r\n\t';
    const factoryForHead = new NormalElementFactory('head', [], headContent);
    const head = factoryForHead.createElement();
    
    // html要素作成
    const htmlContent = '\r\n\t' + head + '\r\n';
    const factoryForHtml = new NormalElementFactory('html', [], htmlContent);
    const html = factoryForHtml.createElement();

    const code = HTMLUtility.doctype + '\r\n' + html;
    return(code);
  }

  /**
   * HTMLDescriptionのstep4に表示するコードを取得する
   * @returns 例コード
   */
  public static getStep4(): string {
    // head部作成
    const headContent = '\r\n\t\t' + HTMLUtility.headText + '\r\n\t';
    const factoryForHead = new NormalElementFactory('head', [], headContent);
    const head = factoryForHead.createElement();

    // body部作成
    const bodyContent = '\r\n\t\t' + HTMLUtility.bodyText + '\r\n\t';
    const factoryForBody = new NormalElementFactory('body', [], bodyContent);
    const body = factoryForBody.createElement();

    // html要素作成
    const htmlContent = '\r\n\t' + head + '\r\n\t' + body + '\r\n';
    const factoryForHtml = new NormalElementFactory('html', [], htmlContent);
    const html = factoryForHtml.createElement();

    const code = HTMLUtility.doctype + '\r\n' + html;
    return(code);
  }
}
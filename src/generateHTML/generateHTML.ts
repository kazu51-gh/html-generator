import { HtmlElementFactory } from "@/utils/elementFactory";

/**
 * HTMLを生成するクラス
 */
export class GenerateHTML extends Object {

  /**
   * HTMLを生成するクラスのインスタンスを生成する
   */
  constructor() {
    super();
  }

  public generate(title: string, description: string, contents: string): string {
    const doctype = '<!DOCTYPE html>';
    const charset = HtmlElementFactory.generate('meta', ['charset="utf-8"']);
    const pageDescription = HtmlElementFactory.generate('meta', ['name="description"', `content="${description}"`]);
    const pageTitle = HtmlElementFactory.generate('title', [], title);
    const headContents = '\r\n\t\t' + charset + '\r\n\t\t' + pageDescription + '\r\n\t\t' + pageTitle + '\r\n\t';
    const head = HtmlElementFactory.generate('head', [], headContents);
    const bodyContents = '\r\n' + contents + '\r\n\t'
    const body = HtmlElementFactory.generate('body', [], bodyContents);
    const htmlContents = '\r\n\t' + head + '\r\n\t' + body + '\r\n';
    const html = doctype + '\r\n' + HtmlElementFactory.generate('html', ['lang="ja"'], htmlContents);
    return(html);
  }

  public generateHead = (title: string, description: string): string => {
    const doctype = '<!DOCTYPE html>';
    const charset = HtmlElementFactory.generate('meta', ['charset="utf-8"']);
    const pageDescription = HtmlElementFactory.generate('meta', ['name="description"', `content="${description}"`]);
    const pageTitle = HtmlElementFactory.generate('title', [], title);
    const headContents = '\r\n\t\t' + charset + '\r\n\t\t' + pageDescription + '\r\n\t\t' + pageTitle + '\r\n\t';
    const head = HtmlElementFactory.generate('head', [], headContents);
    const htmlContents = '\r\n\t' + head + '\r\n';
    const html = doctype + '\r\n' + HtmlElementFactory.generate('html', ['lang="ja"'], htmlContents);
    return(html);
  }
}
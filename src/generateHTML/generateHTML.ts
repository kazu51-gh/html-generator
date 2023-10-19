import { GenerateElement } from "@/generateTag/generateElement";

/**
 * HTMLを生成するクラス
 */
export class GenerateHTML extends Object {
  private generateElement: GenerateElement;

  /**
   * HTMLを生成するクラスのインスタンスを生成する
   */
  constructor() {
    super();
    this.generateElement = new GenerateElement();
  }

  public generate(title: string, description: string, contents: string): string {
    const doctype = '<!DOCTYPE html>';
    const charset = this.generateElement.generateMetaTagElement('meta', ['charset="utf-8"']);
    const pageDescription = this.generateElement.generateMetaTagElement('meta', ['name="description"', `content="${description}"`]);
    const pageTitle = this.generateElement.generateTitleTagElement('title', [], title);
    const headContents = '\r\n\t\t' + charset + '\r\n\t\t' + pageDescription + '\r\n\t\t' + pageTitle + '\r\n\t';
    const head = this.generateElement.generateHeadTagElement('head', [], headContents);
    const bodyContents = '\r\n\t\t' + contents + '\r\n\t'
    const body = this.generateElement.generateBodyTagElement('body', [], bodyContents);
    const htmlContents = '\r\n\t' + head + '\r\n\t' + body + '\r\n';
    const html = doctype + '\r\n' + this.generateElement.generateHtmlTagElement('html', ['lang="ja"'], htmlContents);
    return(html);
  }
}
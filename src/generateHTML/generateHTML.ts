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
    const charset = this.generateElement.generateElement('meta', ['charset="utf-8"']);
    const pageDescription = this.generateElement.generateElement('meta', ['name="description"', `content="${description}"`]);
    const pageTitle = this.generateElement.generateElement('title', [], title);
    const headContents = '\r\n\t\t' + charset + '\r\n\t\t' + pageDescription + '\r\n\t\t' + pageTitle + '\r\n\t';
    const head = this.generateElement.generateElement('head', [], headContents);
    const bodyContents = '\r\n' + contents + '\r\n\t'
    const body = this.generateElement.generateElement('body', [], bodyContents);
    const htmlContents = '\r\n\t' + head + '\r\n\t' + body + '\r\n';
    const html = doctype + '\r\n' + this.generateElement.generateElement('html', ['lang="ja"'], htmlContents);
    return(html);
  }

  public generateHead = (title: string, description: string): string => {
    const doctype = '<!DOCTYPE html>';
    const charset = this.generateElement.generateElement('meta', ['charset="utf-8"']);
    const pageDescription = this.generateElement.generateElement('meta', ['name="description"', `content="${description}"`]);
    const pageTitle = this.generateElement.generateElement('title', [], title);
    const headContents = '\r\n\t\t' + charset + '\r\n\t\t' + pageDescription + '\r\n\t\t' + pageTitle + '\r\n\t';
    const head = this.generateElement.generateElement('head', [], headContents);
    const htmlContents = '\r\n\t' + head + '\r\n';
    const html = doctype + '\r\n' + this.generateElement.generateElement('html', ['lang="ja"'], htmlContents);
    return(html);
  }
}
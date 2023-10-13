import { HTML } from "@/generateHTMLCode/HTML";

/**
 * olタグを生成するクラス
 */

export class Ol extends HTML {
  private numberOfLists: number;

  /**
   * リストの個数を指定する
   * @param numberOfLists リストの個数
   */
  constructor(numberOfLists: number) {
    super('<ol>', '</ol>');
    this.numberOfLists = numberOfLists;
  }

  /**
   * HTMLのリストを生成する
   * @returns 生成したコード
   */
  generateCode(): string {
    const contents = this.determineNumberOfListTags(this.numberOfLists);
    return(this.startingTag + '\r\n' + contents + this.endingTag);
  }

  /**
   * 指定された個数の<li>タグを生成する
   * @param numberOfLists <li>タグの個数
   * @returns 指定した個数の<li>タグの文字列
   */
  protected determineNumberOfListTags(numberOfLists: number): string {
    if (numberOfLists === 1) {
      return('\t<li>text</li>\r\n');
    } else if (numberOfLists === 2) {
      return('\t<li>text</li>\r\n\t<li>text</li>\r\n');
    } else {
      let code = '';
      for(let i = 0; i < numberOfLists; i++) {
        code = code + '\t<li>text</li>\r\n';
      }
      return code;
    }
  }
}

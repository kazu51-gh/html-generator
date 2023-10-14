import { H } from "./tagNames/h";

/**
 * HTMLタグを生成するクラス
 */
export class GenerateTag extends Object {
  private hTags: string[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  /**
   * HTMLのタグのインスタンスを作成する
   */
  constructor() {
    super();
  }

  /**
   * 指定したタグに対応したHTMLを生成する
   * @param kind タグの種類
   * @returns 生成したコード
   */
  public generate(kind: string): string {
    let code = '';
    if (this.hTags.includes(kind)) {
      const tag = new H();
      code = tag.generate(kind);
    }
    return code;
  }
}

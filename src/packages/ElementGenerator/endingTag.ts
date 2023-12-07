import { Tag } from "@/packages/ElementGenerator/tag";

/**
 * HTMLの終了タグ(ending tag)を定義するクラス
 */

export class EndingTag extends Tag {
  private readonly solidus: string = '/';

  /**
   * 終了タグのインスタンスを生成する
   * @param tagName タグ名
   */
  constructor(tagName: string) {
    super(tagName);
  }

  /**
   * 終了タグを生成する
   * @returns 終了タグ
   */
  public generateEndingTag(): string {
    const lessThan = this.getLessThan();
    const tagName = this.getTagName();
    const greaterThan = this.getGreaterThan();

    return lessThan + this.solidus + tagName + greaterThan;
  }
}

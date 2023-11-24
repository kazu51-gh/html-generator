import { Tag } from "@/ElementGenerator/tag";

/**
 * 終了タグ(ending tag)を定義するクラス
 */
export class EndingTag extends Tag {
  private readonly solidus: string = '/';
  
  /**
   * 終了タグのインスタンスを生成する
   */
  constructor(tagName: string) {
    super(tagName);
  }

  /**
   * 小なり文字(<)を取得する
   * @returns 小なり文字
   */
  getLessThan(): string {
    return(this.lessThan);
  }

  /**
   * 大なり文字(>)を取得する
   * @returns 大なり文字
   */
  getGreaterThan(): string {
    return(this.greaterThan);
  }

  /**
   * タグ名を取得する
   * @returns タグ名
   */
  getTagName(): string {
    return(this.tagName);
  }

  /**
   * 斜線文字(/)を取得する
   * @returns 斜線文字
   */
  private getSolidus(): string {
    return(this.solidus);
  }

  /**
   * 終了タグを生成する
   * @returns 終了タグ
   */
  public generateEndingTag(): string {
    const lessThan = this.getLessThan();
    const solidus = this.getSolidus();
    const tagName = this.getTagName();
    const greaterThan = this.getGreaterThan();
    return(lessThan + solidus + tagName + greaterThan);
  }
}

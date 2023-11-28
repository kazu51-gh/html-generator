import { Tag } from "@/ElementGenerator/tag";

/**
 * 終了タグ(ending tag)を定義するクラス
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
   * 終了タグの最初の文字を取得する
   * @returns 小なり文字
   */
  protected getLessThan(): string {
    return(this.lessThan);
  }

  /**
   * 斜線文字を取得する
   * @returns 斜線文字
   */
  private getSolidus(): string {
    return(this.solidus);
  }

  /**
   * タグ名を取得する
   * @returns タグ名
   */
  protected getTagName(): string {
    return(this.tagName);
  }

  /**
   * 終了タグの最後の文字を取得する
   * @returns 大なり文字
   */
  protected getGreaterThan(): string {
    return(this.greaterThan);
  }

  /**
   * 終了タグを生成する
   * @returns 終了タグ
   */
  public generateTag(): string {
    const lessThan = this.getLessThan();
    const solidus = this.getSolidus();
    const tagName = this.getTagName();
    const greaterThan = this.getGreaterThan();
    return(lessThan + solidus + tagName + greaterThan);
  }
}

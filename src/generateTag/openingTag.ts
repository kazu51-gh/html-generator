import { Tag } from "@/generateTag/tag";

/**
 * 開始タグ(opening tag)を定義するクラス
 */
export class OpeningTag extends Tag {
  private greaterThan: string;
  private lessThan: string;
  
  /**
   * 開始タグのインスタンスを生成する
   */
  constructor() {
    super();
    this.lessThan = '<';
    this.greaterThan = '>';
  }

  /**
   * 大なり文字(>)を取得する
   * @returns 大なり文字(>)
   */
  private getGreaterThan(): string {
    return this.greaterThan;
  }

  /**
   * 小なり文字(<)を取得する
   * @returns 小なり文字(<)
   */
  private getLessThan(): string {
    return this.lessThan;
  }

  /**
   * ペアタグ要素の開始タグを取得する
   * @param tagName タグ名
   * @param attribute 属性
   * @returns 開始タグ
   */
  public getOpeningTag(tagName: string, attribute: string[]): string {
    const lessThan = this.getLessThan();
    const greaterThan = this.getGreaterThan();
    let attributes = '';

    if (attribute.length === 0) { return(lessThan + tagName + greaterThan); }

    for(let i = 0; i < attribute.length; i++) {
      attributes = attributes + ' ' + attribute[i];
    }
    
    return(lessThan + tagName + attributes + greaterThan);
  }
}

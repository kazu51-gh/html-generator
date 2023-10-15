import { EmptyTagElement } from "@/generateTag/emptyTagElement";
import { PairTagElement } from "@/generateTag/pairTagElement";

/**
 * タグ要素を定義するクラス
 */
export class TagElement extends Object {
  public emptyTagElement: EmptyTagElement;
  public pairTagElement: PairTagElement;

  /**
   * タグ要素のインスタンスを生成する
   */
  constructor() {
    super();
    this.emptyTagElement = new EmptyTagElement();
    this.pairTagElement = new PairTagElement();
  }

  /**
   * ペアタグ要素を取得する
   * @param tagName タグ名
   * @param contents コンテンツ
   * @returns ペアタグ要素
   */
  public getPairTagElement(tagName: string, contents: string): string {
    const element = this.pairTagElement.getPairTagElement(tagName, contents);
    return(element);
  }

  /**
   * 空要素を取得する
   * @param tagName タグ名
   * @returns 空要素
   */
  public getEmptyTagElement(tagName: string): string {
    const element = this.emptyTagElement.getEmptyTagElement(tagName);
    return(element);
  }
}

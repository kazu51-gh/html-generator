/**
 * タグに関するユーティリティクラス
 */
export class TagUtility extends Object {
  
  /**
   * タグ名を取得する
   * @param tagList タグ名のリスト
   * @returns タグ名
   */
  public static getTagName = (tagList: string[]): string => {
    return tagList[0];
  }
}

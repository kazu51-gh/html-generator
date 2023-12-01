/**
 * sessionStorageに関するユーティリティクラス
 */
export class SessionUtility extends Object {

  /**
   * sessionStorageに格納されているデータを取得する
   * @param key キー
   * @param defaultData 既定値
   * @returns 保持データ
   */
  public static getStoredData(key: string, defaultData: string): string {
    if (typeof sessionStorage !== 'undefined') {
      return(sessionStorage.getItem(key) || defaultData);
    } else {
      return(defaultData);
    }
  }
}

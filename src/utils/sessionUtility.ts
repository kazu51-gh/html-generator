export class SessionUtility extends Object {
  public static getStoredData(key: string, defaultData: string): string {
    if (typeof sessionStorage !== 'undefined') {
      return(sessionStorage.getItem(key) || defaultData);
    } else {
      return(defaultData);
    }
  }
}

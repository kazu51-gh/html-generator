import { nonValueAttributes } from "@/data/attributeData";

/**
 * 属性に関するユーティリティクラス
 */
export class AttributeUtility extends Object {
  /**
   * タグ名の属性で選択されたものとid, classを合わせて属性群にする
   * @param tagId id
   * @param tagClass class
   * @param checkedAttributes 選択属性
   * @returns 属性群
   */
  public static getAttributeList = (tagId: string, tagClass: string, checkedAttributes: string[]): string[] => {
    let attributeList: string[] = [];
    if (tagId !== '') { attributeList.push(`id="${tagId}"`); }
    if (tagClass !== '') { attributeList.push(`class="${tagClass}"`); }
    checkedAttributes.forEach(attribute => {
      if (nonValueAttributes.includes(attribute)) {
        attributeList.push(attribute);
      } else {
        const attributeString = attribute + '=""';
        attributeList.push(attributeString);
      }
    });

    return(attributeList);
  }
}

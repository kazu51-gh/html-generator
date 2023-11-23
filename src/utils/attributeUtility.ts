import { attributeCodes } from "@/data/attributeData";

/**
 * 属性に関するユーティリティクラス
 */
export class AttributeUtility extends Object {
  /**
   * タグ名の属性で選択されたものとid, classを合わせて属性群にする
   * @param tagName タグ名
   * @param tagId id
   * @param tagClass class
   * @param checkedAttributes 選択属性
   * @returns 属性群
   */
  public static getAttributeList = (tagName: string, tagId: string, tagClass: string, checkedAttributes: string[]): string[] => {
    const globalAttributes = attributeCodes['global'];
    const tagAttributes = attributeCodes[tagName];
    let attributeList: string[] = [];
    if (tagId !== '') { attributeList.push(`id="${tagId}"`); }
    if (tagClass !== '') { attributeList.push(`class="${tagClass}"`); }
    checkedAttributes.forEach(att => {
      const globalAttribute = globalAttributes[att];
      const tagAttribute = tagAttributes[att];
      if (globalAttribute !== '' && attributeList.indexOf(globalAttribute) === -1) { attributeList.push(globalAttribute); }
      if (tagAttribute !== '' && attributeList.indexOf(tagAttribute) === -1) { attributeList.push(tagAttribute); }
    });
    return(attributeList);
  }
}

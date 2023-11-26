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
    checkedAttributes.forEach(attribute => {
      const globalAttribute = globalAttributes[attribute];
      const tagAttribute = tagAttributes[attribute];

      if (globalAttribute !== undefined) { attributeList.push(globalAttribute); }
      else if (tagAttribute !== undefined) { attributeList.push(tagAttribute); }
    });

    return(attributeList);
  }
}

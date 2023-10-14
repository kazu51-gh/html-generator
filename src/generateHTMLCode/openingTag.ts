import { Tag } from "./tag";

/**
 * HTMLの開始タグを定義するクラス
 */

export class OpeningTag extends Tag {
  public tagName: string;
  public attribute: string;

  constructor(tagName: string, attribute: string) {
    super();
    this.tagName = tagName;
    this.attribute = attribute;
  }

  public connecter() {
    const tag = new Tag();
    if (this.attribute === '') {
      return(tag.lessThan + this.tagName + tag.greaterThan);
    }
    return(tag.lessThan + this.tagName + this.attribute + tag.greaterThan);
  }
}

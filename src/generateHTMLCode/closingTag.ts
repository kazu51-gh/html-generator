import { Tag } from "./tag";

/**
 * HTMLの終了タグを定義するクラス
 */

export class ClosingTag extends Tag {
  public tagName: string;

  constructor(tagName: string) {
    super();
    this.tagName = tagName;
  }

  public connecter() {
    const tag = new Tag();
    return(tag.lessThan + '/' + this.tagName + tag.greaterThan);
  }
}

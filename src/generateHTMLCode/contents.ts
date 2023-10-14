/**
 * HTMLの内容を定義するクラス
 */

export class Contents extends Object {
  public contents: string | Contents;

  constructor(contents: string | Contents) {
    super();
    this.contents = contents;
  }

  public convertToString(): string {
    if (typeof this.contents === 'string') { return this.contents; }
    return(this.contents.toString());
  }
}

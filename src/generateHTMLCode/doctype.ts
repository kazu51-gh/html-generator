import { HTMLDocument } from "./HTMLDocument";

/**
 * HTMLの文書型を定義するクラス
 */

export class Doctype extends HTMLDocument {
  public doctype: string = '<html lang="ja">';

  constructor(doctype: string) {
    super();
    this.doctype = doctype;
  }
}

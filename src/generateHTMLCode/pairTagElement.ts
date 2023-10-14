import { ClosingTag } from "./closingTag";
import { Contents } from "./contents";
import { Element } from "./element";
import { OpeningTag } from "./openingTag";

/**
 * HTMLのペアタグ要素を定義するクラス
 */
export class PairTagElement extends Element {
  private openingTag: OpeningTag = new OpeningTag();
  private contents: Contents = new Contents();
  private closingTag: ClosingTag = new ClosingTag();

  constructor() {
    super();
  }
}

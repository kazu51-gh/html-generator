import { ClosingTag } from "@/generateTag/closingTag";
import { OpeningTag } from "@/generateTag/openingTag";

/**
 * タグを定義するクラス
 */
export class Tag extends Object {
  public openingTag: OpeningTag;
  public closingTag: ClosingTag;

  /**
   * タグのインスタンスを生成する
   */
  constructor() {
    super();
    this.openingTag = new OpeningTag();
    this.closingTag = new ClosingTag();
  }
}

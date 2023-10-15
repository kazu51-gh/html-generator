import { ClosingTag } from "./closingTag";
import { OpeningTag } from "./openingTag";

export class Tag {
  public openingTag: OpeningTag;
  public closingTag: ClosingTag;

  constructor() {
    this.openingTag = new OpeningTag();
    this.closingTag = new ClosingTag();
  }
}

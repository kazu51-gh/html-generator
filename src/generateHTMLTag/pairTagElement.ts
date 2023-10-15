import { ClosingTag } from "./closingTag";
import { Contents } from "./contents";
import { OpeningTag } from "./openingTag";

export class PairTagElement extends Object {
  public openingTag: OpeningTag;
  public closingTag: ClosingTag;
  public contents: Contents;

  constructor() {
    super();
    this.openingTag = new OpeningTag();
    this.closingTag = new ClosingTag();
    this.contents = new Contents();
  }

  public getPairTagElement(tagName: string, contents: string): string {
    const opening = this.openingTag.getOpeningTag(tagName);
    const closing = this.closingTag.getClosingTag(tagName);
    return(opening + contents + closing);
  }
}

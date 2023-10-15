import { Contents } from "./contents";
import { OpeningTag } from "./openingTag";

export class EmptyTagElement extends Object {
  public openingTag: OpeningTag;
  public contents: Contents;

  constructor() {
    super();
    this.contents = new Contents();
    this.openingTag = new OpeningTag();
  }

  public getEmptyTagElement(tagName: string): string {
    const opening = this.openingTag.getOpeningTagForEmpty(tagName);
    return(opening);
  }
}

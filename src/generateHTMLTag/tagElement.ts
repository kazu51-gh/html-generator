import { EmptyTagElement } from "./emptyTagElement";
import { PairTagElement } from "./pairTagElement";

export class TagElement extends Object {
  public emptyTagElement: EmptyTagElement;
  public pairTagElement: PairTagElement;

  constructor() {
    super();
    this.emptyTagElement = new EmptyTagElement();
    this.pairTagElement = new PairTagElement();
  }

  public getPairTagElement(tagName: string, contents: string): string {
    const element = this.pairTagElement.getPairTagElement(tagName, contents);
    return(element);
  }

  public getEmptyTagElement(tagName: string): string {
    const element = this.emptyTagElement.getEmptyTagElement(tagName);
    return(element);
  }
}

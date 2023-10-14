import { ClosingTag } from "../closingTag";
import { Contents } from "../contents";
import { OpeningTag } from "../openingTag";
import { PairTagElement } from "../pairTagElement";


/**
 * h3タグを定義するクラス
 */

export class H3 extends PairTagElement {
  public tagName: string;

  constructor(tagName: string = 'h3') {
    super();
    this.tagName = tagName;
  }

  public generate(text: string): string {
    return(this.createOpeningTag() + this.createContents(text) + this.createClosingTag());
  }

  public createOpeningTag(): string {
    const tag = new OpeningTag(this.tagName, '');
    return(tag.connecter());
  }

  public createContents(text: string): string {
    const contents = new Contents(text);
    return(contents.convertToString());
  }

  public createClosingTag(): string {
    const tag = new ClosingTag(this.tagName);
    return(tag.connecter());
  }

}

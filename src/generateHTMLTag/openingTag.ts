export class OpeningTag extends Object {
  public greaterThan: string;
  public lessThan: string;
  public slash: string;
  
  constructor() {
    super();
    this.lessThan = '<';
    this.slash = '/';
    this.greaterThan = '>';
  }

  public getGreaterThan(): string {
    return this.greaterThan;
  }

  public getLessThan(): string {
    return this.lessThan;
  }

  public getSlash(): string {
    return this.slash;
  }

  public getOpeningTag(tagName: string): string {
    const lessThan = this.getLessThan();
    const greaterThan = this.getGreaterThan();
    return(lessThan + tagName + greaterThan);
  }

  public getOpeningTagForEmpty(tagName: string): string {
    const lessThan = this.getLessThan();
    const slash = this.getSlash();
    const greaterThan = this.getGreaterThan();
    return(lessThan + tagName + ' ' + slash + greaterThan);
  }
}

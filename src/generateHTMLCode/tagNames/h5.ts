import { ClosingTag } from "../closingTag";
import { Contents } from "../contents";
import { OpeningTag } from "../openingTag";
import { PairTagElement } from "../pairTagElement";

/**
 * h5タグを定義するクラス
 */
export class H5 extends PairTagElement {
  private tagName: string;

  /**
   * h5タグのインスタンスを作成する
   * @param tagName タグ名
   */
  constructor(tagName: string = 'h5') {
    super();
    this.tagName = tagName;
  }

  /**
   * h5タグのコードを生成する
   * @param text コンテンツの内容
   * @returns 生成したコード
   */
  public generate(text: string): string {
    return(this.createOpeningTag() + this.createContents(text) + this.createClosingTag());
  }

  /**
   * 開始タグを作成する
   * @returns 開始タグ
   */
  private createOpeningTag(): string {
    const tag = new OpeningTag(this.tagName, '');
    return(tag.connecter());
  }

  /**
   * コンテンツの内容を作成する
   * @param text コンテンツの内容
   * @returns コンテンツ
   */
  private createContents(text: string): string {
    const contents = new Contents(text);
    return(contents.convertToString());
  }

  /**
   * 終了タグを作成する
   * @returns 終了タグ
   */
  private createClosingTag(): string {
    const tag = new ClosingTag(this.tagName);
    return(tag.connecter());
  }
}

import { ClosingTag } from "../closingTag";
import { Contents } from "../contents";
import { OpeningTag } from "../openingTag";
import { PairTagElement } from "../pairTagElement";

/**
 * pタグを定義するクラス
 */
export class P extends PairTagElement {
  private tagName: string;

  /**
   * pタグのインスタンスを作成する
   * @param tagName タグ名
   */
  constructor(tagName: string = 'p') {
    super();
    this.tagName = tagName;
  }

  /**
   * pタグのコードを生成する
   * @returns 生成したコード
   */
  public generate(): string {
    return(this.createOpeningTag() + this.createContents('テキスト') + this.createClosingTag());
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

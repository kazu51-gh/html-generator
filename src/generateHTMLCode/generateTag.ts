import { A } from "./tagNames/a";
import { Blockquote } from "./tagNames/blockquote";
import { Button } from "./tagNames/button";
import { Code } from "./tagNames/code";
import { Div } from "./tagNames/div";
import { H } from "./tagNames/h";
import { P } from "./tagNames/p";
import { Span } from "./tagNames/span";
import { Strong } from "./tagNames/strong";
import { Textarea } from "./tagNames/textarea";
import { Table } from "./tagNames/table";

/**
 * HTMLタグを生成するクラス
 */
export class GenerateTag extends Object {
  private hTags: string[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  /**
   * HTMLのタグのインスタンスを作成する
   */
  constructor() {
    super();
  }

  /**
   * 指定したタグに対応したHTMLを生成する
   * @param kind タグの種類
   * @returns 生成したコード
   */
  public generate(kind: string): string {
    let code = '';
    if (this.hTags.includes(kind)) { code = new H().generate(kind); }
    else if (kind === 'p') { code = new P().generate(); }
    else if (kind === 'a') { code = new A().generate(); }
    else if (kind === 'div') { code = new Div().generate(); }
    else if (kind === 'span') { code = new Span().generate(); }
    else if (kind === 'strong') { code = new Strong().generate(); }
    else if (kind === 'blockquote') { code = new Blockquote().generate(); }
    else if (kind === 'code') { code = new Code().generate(); }
    else if (kind === 'textarea') { code = new Textarea().generate(); }
    else if (kind === 'button') { code = new Button().generate(); }
    else if (kind === 'table') { code = new Table().generate(); }
    return code;
  }
}

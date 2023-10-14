import { A } from "./tagNames/a";
import { Blockquote } from "./tagNames/blockquote";
import { Button } from "./tagNames/button";
import { Code } from "./tagNames/code";
import { Div } from "./tagNames/div";
import { H1 } from "./tagNames/h1";
import { H2 } from "./tagNames/h2";
import { H3 } from "./tagNames/h3";
import { H4 } from "./tagNames/h4";
import { H5 } from "./tagNames/h5";
import { H6 } from "./tagNames/h6";
import { P } from "./tagNames/p";
import { Span } from "./tagNames/span";
import { Strong } from "./tagNames/strong";
import { Textarea } from "./tagNames/textarea";
import { Table } from "./tagNames/table";

/**
 * HTMLタグを生成するクラス
 */
export class GenerateTag extends Object {

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
    if (kind === 'h1') { code = new H1().generate() }
    else if (kind === 'h2') { code = new H2().generate(); }
    else if (kind === 'h3') { code = new H3().generate(); }
    else if (kind === 'h4') { code = new H4().generate(); }
    else if (kind === 'h5') { code = new H5().generate(); }
    else if (kind === 'h6') { code = new H6().generate(); }
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

import { PairTagElement } from "../pairTagElement";
import { H1 } from "./h1";
import { H2 } from "./h2";
import { H3 } from "./h3";
import { H4 } from "./h4";
import { H5 } from "./h5";
import { H6 } from "./h6";

/**
 * hタグを定義するクラス
 */
export class H extends PairTagElement {

  /**
   * hタグのインスタンスを作成する
   */
  constructor() {
    super();
  }

  /**
   * hタグを生成する
   * @param kind h1からh6のどれか
   * @returns 生成したコード
   */
  public generate(kind: string): string {
    const text = '見出し';
    let code = '';
    if (kind === 'h1') {
      const tag = new H1();
      code = tag.generate(text);
    } else if (kind === 'h2') {
      const tag = new H2();
      code = tag.generate(text);
    } else if (kind === 'h3') {
      const tag = new H3();
      code = tag.generate(text);
    } else if (kind === 'h4') {
      const tag = new H4();
      code = tag.generate(text);
    } else if (kind === 'h5') {
      const tag = new H5();
      code = tag.generate(text);
    } else if (kind === 'h6') {
      const tag = new H6();
      code = tag.generate(text);
    }

    return code;
  }


}

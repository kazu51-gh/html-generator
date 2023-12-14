import { headingElements, listElements, voidElements } from "@/data/elementData";
import { ListElementFactory } from "@/packages/ElementFactory/listElementFactory";
import { NormalElementFactory } from "@/packages/ElementFactory/normalElementFactory";
import { TableElementFactory } from "@/packages/ElementFactory/tableElementFactory";
import { VoidElementFactory } from "@/packages/ElementFactory/voidElementFactory";

/**
 * HTMLコードに関するユーティリティクラス
 */
export class CodeUtility extends Object {

  /**
   * HTMLコードをコピーする
   * @param code HTMLコード
   */
  public static copyCode(code: string) {
    navigator.clipboard.writeText(code).then(
      () => { console.log('The code was successfully copied.'); },
      () => { alert('Copying of code failed.'); }
    );
  }

  /**
   * HTMLコードを作成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param content コンテンツ
   * @param lists リスト数
   * @param columns 列数
   * @param rows 行数
   * @returns HTMLコード or エラーメッセージ
   */
  public static createCode(tagName: string, attributes: string[], content: string, lists: number, columns: number, rows: number): string {
    let code: string = '';

    if (voidElements.includes(tagName)) {
      const voidElementFactory = new VoidElementFactory(tagName, attributes);
      code = voidElementFactory.createElement();
    } else if (headingElements.includes(tagName)) {
      const normalElementFactory = new NormalElementFactory(tagName, attributes, content);
      code = normalElementFactory.createElement();
    } else if (listElements.includes(tagName)) {
      const listElementFactory = new ListElementFactory(tagName, attributes, lists);
      code = listElementFactory.createElement();
    } else if (tagName === 'table') {
      const tableElementFactory = new TableElementFactory(tagName, attributes, columns, rows);
      code = tableElementFactory.createElement();
    } else {
      const normalElementFactory = new NormalElementFactory(tagName, attributes, content);
      code = normalElementFactory.createElement();
    }

    if (code !== '') { return code; }
    else { return 'HTMLコードを作成出来ませんでした。' }
  }
}
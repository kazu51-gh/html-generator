import { NormalElementFactory } from "@/ElementFactory/normalElementFactory";

/**
 * リスト要素(ol要素, ul要素)を作成するクラス
 */
export class ListElementFactory extends Object {
  private tagName: string;
  private attributes: string[];
  private listCounter: number;

  /**
   * リスト要素のインスタンスを生成する
   * @param tagName タグ名
   * @param attributes 属性群
   * @param listCounter リスト数
   */
  constructor(tagName: string, attributes: string[], listCounter: number) {
    super();
    this.tagName = tagName;
    this.attributes = attributes;
    this.listCounter = listCounter;
  }

  /**
   * リスト要素を作成する
   * @returns リスト要素
   */
  public createElement(): string {
    const content = this.createLiElement();
    const normalElementFactory = new NormalElementFactory(this.tagName, this.attributes, content);
    const element = normalElementFactory.createElement();
    return(element);
  }

  /**
   * li要素を指定された個数だけ作成する
   * @returns li要素群
   */
  private createLiElement(): string {
    let code = '';
    [...Array(this.listCounter)].forEach((_, i) => {
      const normalElementFactory = new NormalElementFactory('li', [], `リスト${i+1}`);
      code = code + '\r\n\t' + normalElementFactory.createElement();
    });
    return(code + '\r\n');
  }
}

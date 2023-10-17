import { FC, useState } from "react";
import IdAndClass from "./idAndClass";
import { PairTagElement } from "@/generateTag/pairTagElement";
import { EmptyTagElement } from "@/generateTag/emptyTagElement";

type Props = {
  title: string;
  description: string;
  required: string;
  recommended: string;
  tagList: string[];
}


const Accordion: FC<Props> = ({title, description, required, recommended, tagList}) => {
  const [radioValue, setRadioValue] = useState('h1');
  const [ulListNum, setUlListNum] = useState(1);
  const [olListNum, setOlListNum] = useState(1);
  const [columns, setColumns] = useState(1);
  const [rows, setRows] = useState(1);

  const emptyElementTag = ['br', 'hr', 'img', 'input'];

  const selectTag = tagList.map((tag) =>
    <div key={tag} className="flex">
      <input
        id={tag}
        className="mr-1"
        type="radio"
        value={tag}
        checked={tag === radioValue}
        onChange={(e) => setRadioValue(e.target.value)}
      />
      <label className="mr-3" htmlFor={tag}>
        {tag}
      </label>
    </div>
  );

  const ulList =
  <div>
    <div className="flex">
      <p>リストの数(1以上の整数を入力)：</p>
      <input
        className="border border-black px-1 w-12"
        defaultValue={1}
        min={1}
        onChange={(e) => setUlListNum(parseInt(e.target.value))}
        required
        type="number"
      />
    </div>
  </div>

  const olList =
  <div>
    <div className="flex">
      <p>リストの数(1以上の整数を入力)：</p>
      <input
        className="border border-black px-1 w-12"
        defaultValue={1}
        min={1}
        onChange={(e) => setOlListNum(parseInt(e.target.value))}
        required
        type="number"
      />
    </div>
  </div>

const table =
<div>
  <div className="flex my-1">
    <p>行数(1以上の整数を入力)：</p>
    <input
      className="border border-black px-1 w-12"
      defaultValue={1}
      min={1}
      onChange={(e) => setColumns(parseInt(e.target.value))}
      required
      type="number"
    />
  </div>
  <div className="flex my-1">
    <p>列数(1以上の整数を入力)：</p>
    <input
      className="border border-black px-1 w-12"
      defaultValue={1}
      min={1}
      onChange={(e) => setRows(parseInt(e.target.value))}
      required
      type="number"
    />
  </div>
</div>

  const determineNumberOfListTags = (numberOfLists: number): string => {
    const element = new PairTagElement();
    const liTag = element.getPairTagElement('li', 'リスト');
    if (numberOfLists === 1) {
      return('\r\n\t' + liTag + '\r\n');
    } else if (numberOfLists === 2) {
      return('\r\n\t' + liTag + '\r\n\t' + liTag + '\r\n');
    } else {
      let code = '\r\n';
      for(let i = 0; i < numberOfLists; i++) {
        code = code + '\t' + liTag + '\r\n';
      }
      return code;
    }
  }

  const determineNumberOfThTags = (numberOfTr: number): string => {
    const element = new PairTagElement();
    const thTag = element.getPairTagElement('th', '列タイトル');
    if (numberOfTr === 1) {
      return('\r\n\t\t\t' + thTag + '\r\n');
    } else if (numberOfTr === 2) {
      return('\r\n\t\t\t' + thTag + '\r\n\t\t\t' + thTag + '\r\n');
    } else {
      let code = '\r\n';
      for(let i = 0; i < numberOfTr; i++) {
        code = code + '\t\t\t' + thTag + '\r\n';
      }
      return code;
    }
  }

  const determineNumberOfTdTags = (numberOfTd: number): string => {
    const element = new PairTagElement();
    const tdTag = element.getPairTagElement('td', 'コンテンツ');
    if (numberOfTd === 1) {
      return('\r\n\t\t\t' + tdTag + '\r\n');
    } else if (numberOfTd === 2) {
      return('\r\n\t\t\t' + tdTag + '\r\n\t\t\t' + tdTag + '\r\n');
    } else {
      let code = '\r\n';
      for(let i = 0; i < numberOfTd; i++) {
        code = code + '\t\t\t' + tdTag + '\r\n';
      }
      return code;
    }
  }

  const determineNumberOfTrTags = (numberOfTr: number, td: string): string => {
    const element = new PairTagElement();
    const tdTag = element.getPairTagElement('tr', td);
    if (numberOfTr === 1) {
      return('\r\n\t\t' + tdTag + '\r\n');
    } else if (numberOfTr === 2) {
      return('\r\n\t\t' + tdTag + '\r\n\t\t' + tdTag + '\r\n');
    } else {
      let code = '\r\n';
      for(let i = 0; i < numberOfTr; i++) {
        code = code + '\t\t' + tdTag + '\r\n';
      }
      return code;
    }
  }

  const generateEmptyTagElement = (tagName: string): string => {
    const element = new EmptyTagElement();
    return element.getEmptyTagElement(tagName);
  }

  const generatePairTagElement = (tagName: string, contents:string): string => {
    const element = new PairTagElement();
    return element.getPairTagElement(tagName, contents);
  }

  const generateUlTagElement = (ulListNum: number): string => {
    const element = new PairTagElement();
    const contents = determineNumberOfListTags(ulListNum);
    const ul = element.getPairTagElement('ul', contents);
    return(ul);
  }

  const generateOlTagElement = (olListNum: number): string => {
    const element = new PairTagElement();
    const contents = determineNumberOfListTags(olListNum);
    const ol = element.getPairTagElement('ol', contents);
    return(ol);
  }

  const generateTableElement = (columns: number, rows: number): string => {
    const element = new PairTagElement();
    const caption = '\r\n\t' + element.getPairTagElement('caption', 'テーブル名');
    const thTags = determineNumberOfThTags(columns) + '\t\t';
    const tdTags = determineNumberOfTdTags(columns) + '\t\t';
    const trTagForThead = '\r\n\t\t' + element.getPairTagElement('tr', thTags) + '\r\n\t';
    const trTagForTbody = determineNumberOfTrTags(rows, tdTags) + '\t';
    const theadTag = '\t' + element.getPairTagElement('thead', trTagForThead) + '\r\n';
    const tbodyTag = '\t' + element.getPairTagElement('tbody', trTagForTbody) + '\r\n';
    const table = element.getPairTagElement('table', caption + '\r\n' + theadTag + tbodyTag);
    return(table);
  }

  const checkNeedConsideration = (tagList: string[]) => {
    if (tagList.length !== 1) {
      return(
        <div>
          <div className="flex">
            {selectTag}
          </div>
          <div className="bg-gray-200 inline-block my-3 px-3 py-1.5">
            {generatePairTagElement(radioValue, '例のコンテンツ')}
          </div>
        </div>
      );
    } else if (tagList[0] === 'ul') {
      return(
        <div>
          {ulList}
          <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap">
            {generateUlTagElement(ulListNum)}
          </div>
        </div>
      );
    } else if (tagList[0] === 'ol') {
      return(
        <div>
          {olList}
          <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap">
            {generateOlTagElement(olListNum)}
          </div>
        </div>
      );
    } else if (tagList[0] === 'table') {
      return(
        <div>
          {table}
          <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap">
            {generateTableElement(columns, rows)}
          </div>
        </div>
      );
    } else if (emptyElementTag.find((tag) => tag === tagList[0])) {
      return(
        <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap">
          {generateEmptyTagElement(tagList[0])}
        </div>
      );
    } else {
      return(
        <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap">
          {generatePairTagElement(tagList[0], '例のコンテンツ')}
        </div>
      );
    }
  }

  return(
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
        {title}
        <div className="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </summary>
      <div className="border-t border-t-gray-100 p-4 text-secondary-500">
        {description}
        <br />
        <div className="my-3">{required}</div>
        <div className="my-3">{recommended}</div>
        <hr className="border border-gray-200 my-4" />
        <IdAndClass />
        {checkNeedConsideration(tagList)}
      </div>
    </details>
  );
}

export default Accordion;

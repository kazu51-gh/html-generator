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

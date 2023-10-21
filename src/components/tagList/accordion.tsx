import { FC, useState } from "react";
import { GenerateElement } from "@/generateTag/generateElement";
import IdAndClass from "@/components/tagList/idAndClass";
import NumberOfElements from "./numberOfElements";

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
  const [tagId, setTagId] = useState('');
  const [tagClass, setTagClass] = useState('');

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

  const displayHTML = (tagList: string[], attributes: string[] = []) => {
    const generateElement = new GenerateElement();

    if (tagList.length !== 1) {
      return(
        <div>
          <div className="flex">
            {selectTag}
          </div>
          <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap dark:bg-gray-500 dark:text-gray-300">
            {generateElement.generateElement(radioValue, attributes)}
          </div>
        </div>
      );
    } else if (tagList[0] === 'ul') {
      return(
        <div>
          <NumberOfElements title="リストの数(1以上の整数を入力)" setFunction={setUlListNum} />
          <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap dark:bg-gray-500 dark:text-gray-300">
            {generateElement.generateElement(tagList[0], attributes, '', ulListNum)}
          </div>
        </div>
      );
    } else if (tagList[0] === 'ol') {
      return(
        <div>
          <NumberOfElements title="リストの数(1以上の整数を入力)" setFunction={setOlListNum} />
          <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap dark:bg-gray-500 dark:text-gray-300">
            {generateElement.generateElement(tagList[0], attributes, '', olListNum)}
          </div>
        </div>
      );
    } else if (tagList[0] === 'table') {
      return(
        <div>
          <NumberOfElements title="行数(1以上の整数を入力)" setFunction={setColumns} />
          <NumberOfElements title="列数(1以上の整数を入力)" setFunction={setRows} />
          <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap dark:bg-gray-500 dark:text-gray-300">
            {generateElement.generateElement(tagList[0], attributes, '', 0, columns, rows)}
          </div>
        </div>
      );
    } else {
      return(
        <div className="bg-gray-200 inline-block my-3 px-3 py-1.5 whitespace-pre-wrap dark:bg-gray-500 dark:text-gray-300">
          {generateElement.generateElement(tagList[0], attributes)}
        </div>
      );
    }
  }

  return(
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium group-open:bg-gray-50 dark:group-open:bg-gray-500 dark:group-open:text-white">
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
        <IdAndClass
          setTagId={setTagId}
          setTagClass={setTagClass}
        />
        {displayHTML(tagList)}
      </div>
    </details>
  );
}

export default Accordion;

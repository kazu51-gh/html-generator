import { FC, useState } from "react";
import DisplayCode from "@/components/tagList/displayCode";
import IdAndClass from "@/components/tagList/idAndClass";
import NumberOfElements from "@/components/tagList/numberOfElements";
import SelectHeading from "@/components/radio/selectHeading";

type Props = {
  title: string;
  description: string;
  required: string;
  recommended: string;
  tagList: string[];
}

const Accordion: FC<Props> = ({ title, description, required, recommended, tagList }) => {
  const [radioValue, setRadioValue] = useState('h1');
  const [ulListNum, setUlListNum] = useState(1);
  const [olListNum, setOlListNum] = useState(1);
  const [columns, setColumns] = useState(1);
  const [rows, setRows] = useState(1);
  const [tagId, setTagId] = useState('');
  const [tagClass, setTagClass] = useState('');

  const displayHTML = (tagList: string[]) => {
    if (tagList.length !== 1) {
      return(
        <div>
          <SelectHeading tagList={tagList} radioValue={radioValue} setRadioValue={setRadioValue} />
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={radioValue} attributes={[]} lists={0} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={radioValue} attributes={[`id="${tagId}"`]} lists={0} columns={0} rows={0} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={radioValue} attributes={[`class="${tagClass}"`]} lists={0} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={radioValue} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} lists={0} columns={0} rows={0} />
          }
        </div>
      );
    } else if (tagList[0] === 'ul') {
      return(
        <div>
          <NumberOfElements title="リストの数(1以上の整数を入力)" setFunction={setUlListNum} />
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[]} lists={ulListNum} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`]} lists={ulListNum} columns={0} rows={0} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`class="${tagClass}"`]} lists={ulListNum} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} lists={ulListNum} columns={0} rows={0} />
          }
        </div>
      );
    } else if (tagList[0] === 'ol') {
      return(
        <div>
          <NumberOfElements title="リストの数(1以上の整数を入力)" setFunction={setOlListNum} />
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[]} lists={olListNum} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`]} lists={olListNum} columns={0} rows={0} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`class="${tagClass}"`]} lists={olListNum} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} lists={olListNum} columns={0} rows={0} />
          }
        </div>
      );
    } else if (tagList[0] === 'table') {
      return(
        <div>
          <NumberOfElements title="行数(1以上の整数を入力)" setFunction={setColumns} />
          <NumberOfElements title="列数(1以上の整数を入力)" setFunction={setRows} />
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[]} lists={0} columns={columns} rows={rows} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`]} lists={0} columns={columns} rows={rows} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`class="${tagClass}"`]} lists={0} columns={columns} rows={rows} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} lists={0} columns={columns} rows={rows} />
          }
        </div>
      );
    } else {
      return(
        <div>
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[]} lists={0} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`]} lists={0} columns={0} rows={0} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`class="${tagClass}"`]} lists={0} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} lists={0} columns={0} rows={0} />
          }
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

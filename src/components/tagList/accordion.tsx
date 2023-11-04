import { FC, useState } from "react";
import { TagUtility } from "@/utils/tagUtility";
import AttributeList from "@/components/tagList/attributeList";
import DisplayCode from "@/components/tagList/displayCode";
import IdAndClass from "@/components/tagList/idAndClass";
import NumberOfElements from "@/components/tagList/numberOfElements";
import SelectHeading from "@/components/radio/selectHeading";

type Props = {
  title: string;
  description: string;
  tagList: string[];
}

const Accordion: FC<Props> = ({ title, description, tagList }) => {
  const [checkedAttributes, setCheckedAttributes] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState('h1');
  const [ulListNum, setUlListNum] = useState(1);
  const [olListNum, setOlListNum] = useState(1);
  const [columns, setColumns] = useState(1);
  const [rows, setRows] = useState(1);
  const [tagId, setTagId] = useState('');
  const [tagClass, setTagClass] = useState('');
  const tagName = TagUtility.getTagName(tagList);

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
    <details className="group h-full w-full">
      <summary className="cursor-pointer flex justify-between items-center list-none p-2 text-lg">
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
          <path
            fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5}
            d="M 7,10.5 L 14,17.5 L 21,10.5"
            className="block transition-all duration-300 group-open:rotate-180 origin-center"
          />
        </svg>
      </summary>
      <div className="border-t border-t-black p-2 dark:border-t-gray-500">
        {description}
        <hr className="border border-gray-300 my-3 dark:border-gray-500" />
        <IdAndClass setTagId={setTagId} setTagClass={setTagClass} />
        <AttributeList
          tagName={tagName}
          checkedAttributes={checkedAttributes}
          setCheckedAttributes={setCheckedAttributes}
        />
        {displayHTML(tagList)}
      </div>
    </details>
  );
}

export default Accordion;

import { FC, useState } from "react";
import DisplayCode from "@/components/tagList/displayCode";
import IdAndClass from "@/components/tagList/idAndClass";
import NumberOfElements from "@/components/tagList/numberOfElements";
import SelectHeading from "@/components/radio/selectHeading";
import SetContent from "@/components/input/tagList/setContent";

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
  const [content, setContent] = useState('');

  const displayHTML = (tagList: string[]) => {
    if (tagList.length !== 1) {
      return(
        <div>
          <SelectHeading tagList={tagList} radioValue={radioValue} setRadioValue={setRadioValue} />
          <SetContent label='見出しのテキスト' setContent={setContent} />
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={radioValue} attributes={[]} content={content} lists={0} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={radioValue} attributes={[`id="${tagId}"`]} content={content} lists={0} columns={0} rows={0} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={radioValue} attributes={[`class="${tagClass}"`]} content={content} lists={0} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={radioValue} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} content={content} lists={0} columns={0} rows={0} />
          }
        </div>
      );
    } else if (tagList[0] === 'ul') {
      return(
        <div>
          <NumberOfElements title="リストの数(1以上の整数を入力)" setFunction={setUlListNum} />
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[]} content='' lists={ulListNum} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`]} content='' lists={ulListNum} columns={0} rows={0} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`class="${tagClass}"`]} content='' lists={ulListNum} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} content='' lists={ulListNum} columns={0} rows={0} />
          }
        </div>
      );
    } else if (tagList[0] === 'ol') {
      return(
        <div>
          <NumberOfElements title="リストの数(1以上の整数を入力)" setFunction={setOlListNum} />
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[]} content='' lists={olListNum} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`]} content='' lists={olListNum} columns={0} rows={0} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`class="${tagClass}"`]} content='' lists={olListNum} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} content='' lists={olListNum} columns={0} rows={0} />
          }
        </div>
      );
    } else if (tagList[0] === 'table') {
      return(
        <div>
          <NumberOfElements title="行数(1以上の整数を入力)" setFunction={setColumns} />
          <NumberOfElements title="列数(1以上の整数を入力)" setFunction={setRows} />
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[]} content='' lists={0} columns={columns} rows={rows} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`]} content='' lists={0} columns={columns} rows={rows} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`class="${tagClass}"`]} content='' lists={0} columns={columns} rows={rows} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} content='' lists={0} columns={columns} rows={rows} />
          }
        </div>
      );
    } else {
      return(
        <div>
          {setContentBox(tagList[0])}
          {tagId === '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[]} content={content} lists={0} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass === '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`]} content={content} lists={0} columns={0} rows={0} />
          }
          {tagId === '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`class="${tagClass}"`]} content={content} lists={0} columns={0} rows={0} />
          }
          {tagId !== '' && tagClass !== '' &&
            <DisplayCode tagName={tagList[0]} attributes={[`id="${tagId}"`, `class="${tagClass}"`]} content={content} lists={0} columns={0} rows={0} />
          }
        </div>
      );
    }
  }

  const setContentBox = (tag: string) => {
    if (tag == 'p') { return(<SetContent label='表示するテキスト' setContent={setContent} />); }
    else if (tag == 'a') { return(<SetContent label='リンクを貼り付けるテキスト' setContent={setContent} />); }
    else if (tag == 'div') { return(<SetContent label='コンテンツ' setContent={setContent} />); }
    else if (tag == 'span') { return(<SetContent label='コンテンツ' setContent={setContent} />); }
    else if (tag == 'strong') { return(<SetContent label='強調するテキスト' setContent={setContent} />); }
    else if (tag == 'blockquote') { return(<SetContent label='引用文' setContent={setContent} />); }
    else if (tag == 'code') { return(<SetContent label='コード' setContent={setContent} />); }
    else if (tag == 'textarea') { return(<SetContent label='初期テキスト' setContent={setContent} />); }
    else if (tag == 'button') { return(<SetContent label='ボタンに表示するテキスト' setContent={setContent} />); }
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

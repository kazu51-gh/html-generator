import { FC, useState } from "react";
import { TagUtility } from "@/utils/tagUtility";
import AttributeList from "@/components/tagList/attributeList";
import DisplayCode from "@/components/tagList/displayCode";
import IdAndClass from "@/components/tagList/idAndClass";
import NumberOfElements from "@/components/tagList/numberOfElements";
import SelectHeading from "@/components/radio/selectHeading";
import { AttributeUtility } from "@/utils/attributeUtility";
import { headingDescriptions } from "@/data/headingData";

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
      const attributeList = AttributeUtility.getAttributeList('h', tagId, tagClass, checkedAttributes);
      return(
        <div>
          <SelectHeading tagList={tagList} radioValue={radioValue} setRadioValue={setRadioValue} />
          <DisplayCode tagName={radioValue} attributes={attributeList} lists={0} columns={0} rows={0} />
        </div>
      );
    } else if (tagList[0] === 'ul') {
      const attributeList = AttributeUtility.getAttributeList('ul', tagId, tagClass, checkedAttributes);
      return(
        <div>
          <NumberOfElements title="リストの数(1以上の整数を入力)" setFunction={setUlListNum} />
          <DisplayCode tagName={'ul'} attributes={attributeList} lists={ulListNum} columns={0} rows={0} />
        </div>
      );
    } else if (tagList[0] === 'ol') {
      const attributeList = AttributeUtility.getAttributeList('ol', tagId, tagClass, checkedAttributes);
      return(
        <div>
          <NumberOfElements title="リストの数(1以上の整数を入力)" setFunction={setOlListNum} />
          <DisplayCode tagName={'ol'} attributes={attributeList} lists={olListNum} columns={0} rows={0} />
        </div>
      );
    } else if (tagList[0] === 'table') {
      const attributeList = AttributeUtility.getAttributeList('table', tagId, tagClass, checkedAttributes);
      return(
        <div>
          <NumberOfElements title="行数(1以上の整数を入力)" setFunction={setColumns} />
          <NumberOfElements title="列数(1以上の整数を入力)" setFunction={setRows} />
          <DisplayCode tagName={'table'} attributes={attributeList} lists={0} columns={columns} rows={rows} />
        </div>
      );
    } else {
      const attributeList = AttributeUtility.getAttributeList(tagList[0], tagId, tagClass, checkedAttributes);
      return(
        <div>
          <DisplayCode tagName={tagList[0]} attributes={attributeList} lists={0} columns={0} rows={0} />
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
        <div className="my-3">
          <h3 className="text-xl">属性</h3>
          <p className="text-sm text-[#9CA3AF]">{headingDescriptions.attribute}</p>
        </div>
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

import { AccordionValue } from "@/types/accordion";
import { AttributeUtility } from "@/utils/attributeUtility";
import { contentData } from "@/data/contentData";
import { FC, useState } from "react";
import { headingDescriptions } from "@/data/descriptionData";
import { headingElements, listElements } from "@/data/elementData";
import { TagUtility } from "@/utils/tagUtility";
import AttributeList from "@/components/tagList/attributeList";
import DisplayCode from "@/components/tagList/displayCode";
import IdAndClass from "@/components/tagList/idAndClass";
import NumberOfElements from "@/components/tagList/numberOfElements";
import SelectHeading from "@/components/tagList/selectHeading";
import SettingTitle from "@/components/headings/settingTitle";

const Accordion: FC<AccordionValue> = ({ title, description, tagList }) => {
  const [checkedAttributes, setCheckedAttributes] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState<string>('h1');
  const [tagId, setTagId] = useState<string>('');
  const [tagClass, setTagClass] = useState<string>('');
  const [lists, setLists] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);
  const [rows, setRows] = useState<number>(1);
  const tagName = TagUtility.getTagName(tagList);

  const displayHTML = () => {
    const attributeList = AttributeUtility.getAttributeList(tagId, tagClass, checkedAttributes);
    if (headingElements.includes(tagName)) {
      const content = contentData['h'];
      return(
        <DisplayCode
          tagName={radioValue}
          attributes={attributeList}
          content={content}
        />
      );
    } else if (listElements.includes(tagName)) {
      return(
        <DisplayCode
          tagName={tagName}
          attributes={attributeList}
          lists={lists}
        />
      );
    } else if (tagName === 'table') {
      return(
        <DisplayCode
          tagName={tagName}
          attributes={attributeList}
          columns={columns}
          rows={rows}
        />
      );
    } else {
      const content = contentData[tagName];
      return(
        <DisplayCode
          tagName={tagName}
          attributes={attributeList}
          content={content}
        />
      );
    }
  }

  return(
    <details className="group h-full w-full">
      <summary className="cursor-pointer flex justify-between items-center list-none p-2 text-lg">
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
          <path className="block transition-all duration-300 group-open:rotate-180 origin-center"
            fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M 7,10.5 L 14,17.5 L 21,10.5"
          />
        </svg>
      </summary>
      <div className="border-t border-t-black p-2">
        {description}
        <hr className="border border-[#9CA3AF] my-1" />
        <SettingTitle
          title="属性"
          description={headingDescriptions.attribute}
        />
        <IdAndClass setTagId={setTagId} setTagClass={setTagClass} />
        <AttributeList
          tagName={tagName}
          checkedAttributes={checkedAttributes}
          setCheckedAttributes={setCheckedAttributes}
        />
        {headingElements.includes(tagName) && 
          <SelectHeading tagList={tagList} radioValue={radioValue} setRadioValue={setRadioValue} />
        }
        {listElements.includes(tagName) &&
          <NumberOfElements title="リスト数(1以上の整数)" setFunction={setLists} />
        }
        {tagName === 'table' &&
          <NumberOfElements title="行数(1以上の整数)" setFunction={setColumns} />
        }
        {tagName === 'table' &&
          <NumberOfElements title="列数(1以上の整数)" setFunction={setRows} />
        }
        {displayHTML()}
      </div>
    </details>
  );
}

export default Accordion;

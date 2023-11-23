import { Dispatch, FC, SetStateAction } from "react";
import { attributes } from "@/data/attributeData";

type Props = {
  tagName: string;
  checkedAttributes: string[];
  setCheckedAttributes: Dispatch<SetStateAction<string[]>>;
}

const AttributeList: FC<Props> = ({ tagName, checkedAttributes, setCheckedAttributes }) => {
  const tagAttributes = attributes[tagName];

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    
    if (checked) {
      setCheckedAttributes([...checkedAttributes, name]);
    } else {
      setCheckedAttributes(checkedAttributes.filter((attribute) => attribute !== name));
    }
  }

  return(
    <div className="my-3 w-full">
      {tagAttributes.length > 0 && 
        <div className="w-1/2">
          {tagAttributes.length > 4 &&
            <ul className="h-32 mb-3 overflow-y-scroll">
              {tagAttributes.map((attribute, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={attribute}
                    name={attribute}
                    checked={checkedAttributes.includes(attribute)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    className="mx-2"
                    htmlFor={attribute}
                  >
                    {attribute}
                  </label>
                </li>
              ))}
            </ul>
          }
          {tagAttributes.length <= 4 &&
            <ul className="mb-3">
              {tagAttributes.map((attribute, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={attribute}
                    name={attribute}
                    checked={checkedAttributes.includes(attribute)}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    className="mx-2"
                    htmlFor={attribute}
                  >
                    {attribute}
                  </label>
                </li>
              ))}
            </ul>
          }
      </div>
      }
    </div>
  );
}

export default AttributeList;

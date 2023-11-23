import { Dispatch, FC, SetStateAction } from "react";
import { attributes } from "@/data/attributeData";
import { headingDescriptions } from "@/data/headingData";

type Props = {
  tagName: string;
  checkedAttributes: string[];
  setCheckedAttributes: Dispatch<SetStateAction<string[]>>;
}

const AttributeList: FC<Props> = ({ tagName, checkedAttributes, setCheckedAttributes }) => {
  const globalAttributes = attributes['global'];
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
    <div className="global-intrinsic-attributes-setting">
      <div className="global-attributes-setting my-3">
        <h4 className="text-base">グローバル属性</h4>
        <p className="text-sm text-[#9CA3AF]">{headingDescriptions.globalAttribute}</p>
        <div className="m-3 w-1/2">
          <ul className="h-32 overflow-y-scroll">
            {globalAttributes.map((attribute, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`${tagName}-${attribute}`}
                  name={attribute}
                  checked={checkedAttributes.includes(attribute)}
                  onChange={handleCheckboxChange}
                />
                <label className="mx-2" htmlFor={`${tagName}-${attribute}`}>{attribute}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="intrinsic-attributes-setting my-3">
        {tagAttributes.length > 0 &&
          <div className="intrinsic-attributes-setting">
            <h4 className="text-base">固有属性</h4>
            <p className="text-sm text-[#9CA3AF]">{headingDescriptions.intrinsicAttribute}</p>
            <div className="m-3 w-1/2">
              {tagAttributes.length > 4 &&
                <ul className="h-32 overflow-y-scroll">
                  {tagAttributes.map((attribute, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        id={attribute}
                        name={attribute}
                        checked={checkedAttributes.includes(attribute)}
                        onChange={handleCheckboxChange}
                      />
                      <label className="mx-2" htmlFor={attribute}>{attribute}</label>
                    </li>
                  ))}
                </ul>
              }
              {tagAttributes.length <= 4 &&
                <ul>
                  {tagAttributes.map((attribute, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        id={attribute}
                        name={attribute}
                        checked={checkedAttributes.includes(attribute)}
                        onChange={handleCheckboxChange}
                      />
                      <label className="mx-2" htmlFor={attribute}>{attribute}</label>
                    </li>
                  ))}
                </ul>
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default AttributeList;

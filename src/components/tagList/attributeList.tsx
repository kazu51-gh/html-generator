import { attributeDescriptions, attributes } from "@/data/attributeData";
import { CheckedAttributes } from "@/types/checkedAttributes";
import { FC } from "react";
import { headingDescriptions } from "@/data/descriptionData";

const AttributeList: FC<CheckedAttributes> = ({ tagName, checkedAttributes, setCheckedAttributes }) => {
  const globalAttributes = attributes['global'];
  const globalAttributeDescriptions = attributeDescriptions['global'];
  const tagAttributes = attributes[tagName];
  const tagAttributeDescriptions = attributeDescriptions[tagName];

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
        <div className="m-3 w-11/12">
          <ul className="h-40 overflow-y-scroll">
            {globalAttributes.map((attribute, index) => (
              <li key={index}>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row">
                    <input
                      className="mx-1"
                      type="checkbox"
                      id={`${tagName}-${attribute}`}
                      name={attribute}
                      checked={checkedAttributes.includes(attribute)}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={`${tagName}-${attribute}`}>{attribute}</label>
                  </div>
                  <div className="flex flex-col mr-2 text-center">
                    <p className="text-sm my-0.5">{globalAttributeDescriptions[attribute][0]}</p>
                    <p className="text-sm my-0.5">{'値：'+ globalAttributeDescriptions[attribute][1]}</p>
                  </div>
                </div>
                <hr className="border border-black my-1" />
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
            <div className="m-3 w-11/12">
              <ul className="h-40 overflow-y-scroll">
                {tagAttributes.map((attribute, index) => (
                  <li key={index}>
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row">
                        <input
                          className="mr-1"
                          type="checkbox"
                          id={attribute}
                          name={attribute}
                          checked={checkedAttributes.includes(attribute)}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor={attribute}>{attribute}</label>
                      </div>
                      <div className="flex flex-col mr-2 text-center">
                        <p className="text-sm">{tagAttributeDescriptions[attribute][0]}</p>
                        <p className="text-sm">{'値：'+ tagAttributeDescriptions[attribute][1]}</p>
                      </div>
                    </div>
                    <hr className="border border-black my-1" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default AttributeList;

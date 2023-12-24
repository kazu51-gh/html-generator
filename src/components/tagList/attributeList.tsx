import { attributeDescriptions, attributes } from "@/data/attributeData";
import { CheckedAttributes } from "@/types/checkedAttributes";
import { FC } from "react";
import { headingDescriptions } from "@/data/descriptionData";
import AttributeCheckbox from "@/components/input/attributeCheckbox";
import CheckboxLabel from "@/components/label/checkboxLabel";
import SettingTitle from "@/components/headings/settingTitle";

const AttributeList: FC<CheckedAttributes> = ({ tagName, checkedAttributes, setCheckedAttributes }) => {
  const globalAttributes = attributes['global'];
  const globalAttributeDescriptions = attributeDescriptions['global'];
  const tagAttributes = attributes[tagName];
  const tagAttributeDescriptions = attributeDescriptions[tagName];

  return(
    <div>
      <div className="my-2">
        <SettingTitle
          title="グローバル属性"
          description={headingDescriptions.globalAttribute}
        />
        <div className="w-11/12">
          <ul className="h-40 overflow-y-scroll">
            {globalAttributes.map((attribute, index) => (
              <li key={index}>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row">
                    <AttributeCheckbox
                      tagName={tagName}
                      attribute={attribute}
                      checkedAttributes={checkedAttributes}
                      setCheckedAttributes={setCheckedAttributes}
                    />
                    <CheckboxLabel
                      tagName={tagName}
                      attribute={attribute}
                    />
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
      <div className="my-2">
        {tagAttributes.length > 0 &&
          <div>
            <SettingTitle
              title="固有属性"
              description={headingDescriptions.intrinsicAttribute}
            />
            <div className="w-11/12">
              <ul className="h-40 overflow-y-scroll">
                {tagAttributes.map((attribute, index) => (
                  <li key={index}>
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row">
                        <AttributeCheckbox
                          tagName={tagName}
                          attribute={attribute}
                          checkedAttributes={checkedAttributes}
                          setCheckedAttributes={setCheckedAttributes}
                        />
                        <CheckboxLabel
                          tagName={tagName}
                          attribute={attribute}
                        />
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

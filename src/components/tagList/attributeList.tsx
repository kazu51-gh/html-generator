import { FC } from "react";
import { attributes } from "@/data/attributeData";

type Props = {
  tagName: string;
}

const AttributeList: FC<Props> = ({ tagName }) => {
  const tagAttributes = attributes[tagName];

  return(
    <div>
      <div>
        {tagAttributes.length > 0 && <h2>属性</h2>}
        <ul>
          {tagAttributes.map((attribute, index) => (
            <li key={index}>
              <input type="checkbox" id={attribute} name={attribute} />
              <label htmlFor={attribute}>{attribute}</label>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default AttributeList;

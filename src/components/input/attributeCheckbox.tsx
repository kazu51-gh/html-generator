import { CheckedAttributes } from "@/types/checkedAttributes";
import { FC } from "react";

type Checkbox = CheckedAttributes & {
  attribute: string;
}

const AttributeCheckbox: FC<Checkbox> = ({tagName, attribute, checkedAttributes, setCheckedAttributes}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    
    if (checked) {
      setCheckedAttributes([...checkedAttributes, name]);
    } else {
      setCheckedAttributes(checkedAttributes.filter((attribute) => attribute !== name));
    }
  }
  
  return(
    <input className="mx-1"
      type="checkbox"
      id={`${tagName}-${attribute}`}
      name={attribute}
      checked={checkedAttributes.includes(attribute)}
      onChange={handleCheckboxChange}
    />
  );
}

export default AttributeCheckbox;

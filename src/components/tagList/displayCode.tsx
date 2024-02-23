import { CodeUtility } from "@/utils/codeUtility";
import { ElementMaterial } from "@/types/elementMaterial";
import { FC } from "react";
import ExampleArea from "@/components/area/exampleArea";

const DisplayCode: FC<ElementMaterial> = ({ tagName, attributes, content = '', lists = 0, columns = 0, rows = 0 }) => {
  const code = CodeUtility.createCode(tagName, attributes, content, lists, columns, rows);

  return(
    <div>
      <ExampleArea code={code} />
    </div>
  );
}

export default DisplayCode;

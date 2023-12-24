import { htmlDescription } from "@/data/descriptionData";
import { HTMLUtility } from "@/utils/HTMLUtility";
import DescriptionText from "@/components/phrase/descriptionText";
import DescriptionTitle from "@/components/headings/descriptionTitle";
import ExampleArea from "@/components/area/exampleArea";
import PageTitle from "@/components/headings/pageTitle";

const HTMLDescription = () => {
  return(
    <div className="h-full w-full">
      <div className="w-[90%] h-[90%] overflow-y-scroll p-3">
        <div>
          <PageTitle title="HTMLって何？" />
          <DescriptionText text={htmlDescription.what} />
        </div>
        <div className="my-4">
          <DescriptionTitle title="1. 文書宣言(DOCTYPE宣言)の記述" />
          <DescriptionText text={htmlDescription.step1} />
          <div className="flex justify-center">
            <code className="border border-black p-1 rounded">&lt;!DOCTYPE&nbsp;html&gt;</code>
          </div>
        </div>
        <div className="my-4">
          <DescriptionTitle title="2. html要素を用意する" />
          <DescriptionText text={htmlDescription.step2} />
          <ExampleArea code={HTMLUtility.getStep2()} />
        </div>
        <div className="my-4">
          <DescriptionTitle title="3. head部を記述する" />
          <DescriptionText text={htmlDescription.step3} />
          <ExampleArea code={HTMLUtility.getStep3()} />
        </div>
        <div className="my-4">
          <DescriptionTitle title="4. body部を記述する" />
          <DescriptionText text={htmlDescription.step4} />
          <ExampleArea code={HTMLUtility.getStep4()} />
        </div>
        <div className="my-4">
          <DescriptionTitle title="5. 完成" />
          <DescriptionText text={htmlDescription.step5} />
        </div>
      </div>
    </div>
  );
}

export default HTMLDescription;

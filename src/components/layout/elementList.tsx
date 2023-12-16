import Accordion from "@/components/tagList/accordion";
import { tagNames } from "@/data/tagData";
import { accordionDescriptions, tagDescriptions } from "@/data/descriptionData";
import PageTitle from "@/components/headings/pageTitle";

const ElementList = () => {
  return(
    <div className="h-full w-full">
      <PageTitle title="タグ一覧" />
      <div className="h-[90%] w-[90%] overflow-y-scroll">
        <div className="border border-black divide-y divide-black rounded dark:bg-gray-700 dark:border-gray-500 dark:divide-gray-500 dark:text-gray-300">
          <Accordion
            title={accordionDescriptions.h}
            description={tagDescriptions.h}
            tagList={tagNames.h}
          />
          <Accordion
            title={accordionDescriptions.p}
            description={tagDescriptions.p}
            tagList={tagNames.p}
          />
          <Accordion
            title={accordionDescriptions.a}
            description={tagDescriptions.a}
            tagList={tagNames.a}
          />
          <Accordion
            title={accordionDescriptions.img}
            description={tagDescriptions.img}
            tagList={tagNames.img}
          />
          <Accordion
            title={accordionDescriptions.ul}
            description={tagDescriptions.ul}
            tagList={tagNames.ul}
          />
          <Accordion
            title={accordionDescriptions.ol}
            description={tagDescriptions.ol}
            tagList={tagNames.ol}
          />
          <Accordion
            title={accordionDescriptions.div}
            description={tagDescriptions.div}
            tagList={tagNames.div}
          />
          <Accordion
            title={accordionDescriptions.span}
            description={tagDescriptions.span}
            tagList={tagNames.span}
          />
          <Accordion
            title={accordionDescriptions.br}
            description={tagDescriptions.br}
            tagList={tagNames.br}
          />
          <Accordion
            title={accordionDescriptions.hr}
            description={tagDescriptions.hr}
            tagList={tagNames.hr}
          />
          <Accordion
            title={accordionDescriptions.strong}
            description={tagDescriptions.strong}
            tagList={tagNames.strong}
          />
          <Accordion
            title={accordionDescriptions.blockquote}
            description={tagDescriptions.blockquote}
            tagList={tagNames.blockquote}
          />
          <Accordion
            title={accordionDescriptions.code}
            description={tagDescriptions.code}
            tagList={tagNames.code}
          />
          <Accordion
            title={accordionDescriptions.input}
            description={tagDescriptions.input}
            tagList={tagNames.input}
          />
          <Accordion
            title={accordionDescriptions.textarea}
            description={tagDescriptions.textarea}
            tagList={tagNames.textarea}
          />
          <Accordion
            title={accordionDescriptions.button}
            description={tagDescriptions.button}
            tagList={tagNames.button}
          />
          <Accordion
            title={accordionDescriptions.table}
            description={tagDescriptions.table}
            tagList={tagNames.table}
          />
        </div>
      </div>
    </div>
  );
}

export default ElementList;

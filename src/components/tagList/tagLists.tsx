import Accordion from "@/components/tagList/accordion";
import { tagDescriptions, tagNames, tagTitles } from "@/data/tagData";
import PageTitle from "@/components/headings/pageTitle";

const TagLists = () => {
  return(
    <div className="h-screen">
      <PageTitle title="タグ一覧" />
      <div className="h-2/3 max-w-xl mx-1 my-2 overflow-y-scroll">
        <div className="bg-white border border-black divide-y divide-black rounded dark:bg-gray-700 dark:border-gray-500 dark:divide-gray-500 dark:text-gray-300">
          <Accordion
            title={tagTitles.h}
            description={tagDescriptions.h}
            tagList={tagNames.h}
          />
          <Accordion
            title={tagTitles.p}
            description={tagDescriptions.p}
            tagList={tagNames.p}
          />
          <Accordion
            title={tagTitles.a}
            description={tagDescriptions.a}
            tagList={tagNames.a}
          />
          <Accordion
            title={tagTitles.img}
            description={tagDescriptions.img}
            tagList={tagNames.img}
          />
          <Accordion
            title={tagTitles.ul}
            description={tagDescriptions.ul}
            tagList={tagNames.ul}
          />
          <Accordion
            title={tagTitles.ol}
            description={tagDescriptions.ol}
            tagList={tagNames.ol}
          />
          <Accordion
            title={tagTitles.div}
            description={tagDescriptions.div}
            tagList={tagNames.div}
          />
          <Accordion
            title={tagTitles.span}
            description={tagDescriptions.span}
            tagList={tagNames.span}
          />
          <Accordion
            title={tagTitles.br}
            description={tagDescriptions.br}
            tagList={tagNames.br}
          />
          <Accordion
            title={tagTitles.hr}
            description={tagDescriptions.hr}
            tagList={tagNames.hr}
          />
          <Accordion
            title={tagTitles.strong}
            description={tagDescriptions.strong}
            tagList={tagNames.strong}
          />
          <Accordion
            title={tagTitles.blockquote}
            description={tagDescriptions.blockquote}
            tagList={tagNames.blockquote}
          />
          <Accordion
            title={tagTitles.code}
            description={tagDescriptions.code}
            tagList={tagNames.code}
          />
          <Accordion
            title={tagTitles.input}
            description={tagDescriptions.input}
            tagList={tagNames.input}
          />
          <Accordion
            title={tagTitles.textarea}
            description={tagDescriptions.textarea}
            tagList={tagNames.textarea}
          />
          <Accordion
            title={tagTitles.button}
            description={tagDescriptions.button}
            tagList={tagNames.button}
          />
          <Accordion
            title={tagTitles.table}
            description={tagDescriptions.table}
            tagList={tagNames.table}
          />
        </div>
      </div>
    </div>
  );
}

export default TagLists;

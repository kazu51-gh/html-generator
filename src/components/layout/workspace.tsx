import { FC, useEffect, useState } from "react";
import BasicSetting from "@/components/layout/basicSetting";
import CodeArea from "@/components/layout/codeArea";
import HtmlDownload from "@/components/layout/htmlDownload";
import TagLists from "@/components/layout/tagLists";
import Viewer from "@/components/layout/viewer";
import getStoredData from "@/utils/getStoredData";

type Props = {
  currentView: string;
}

const Workspace: FC<Props> = ({ currentView }) => {
  const [pageTitle, setPageTitle] = useState<string>(getStoredData('pageTitle', ''));
  const [pageDescription, setPageDescription] = useState<string>(getStoredData('pageDescription', ''));
  const [textareaData, setTextareaData] = useState<string>(getStoredData('textareaData', ''));

  useEffect(() => {
    sessionStorage.setItem('pageTitle', pageTitle);
  }, [pageTitle]);

  useEffect(() => {
    sessionStorage.setItem('pageDescription', pageDescription);
  }, [pageDescription]);

  useEffect(() => {
    sessionStorage.setItem('textareaData', textareaData);
  }, [textareaData]);

  return(
    <div className="flex flex-row h-full w-full">
      <div className="flex-1 m-3">
        <CodeArea
          textareaData={textareaData}
          setTextareaData={setTextareaData}
        />
      </div>
      <div className="flex-1 m-3">
        {currentView === 'page-setting' &&
          <BasicSetting
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}
            pageDescription={pageDescription}
            setPageDescription={setPageDescription}
          />
        }
        {currentView === 'tag-lists' &&
          <TagLists />
        }
        {currentView === 'viewer' &&
          <Viewer textareaData={textareaData} />
        }
        {currentView === 'html-download' &&
          <HtmlDownload
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            textareaData={textareaData}
          />
        }
      </div>
    </div>
  );
}

export default Workspace;

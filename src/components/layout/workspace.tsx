import { FC, useEffect, useState } from "react";
import BasicSetting from "@/components/layout/basicSetting";
import CodeArea from "@/components/textarea/codeArea";
import HtmlDownload from "@/components/layout/htmlDownload";
import TagLists from "@/components/tagList/tagLists";
import Viewer from "@/components/layout/viewer";

type Props = {
  currentView: string;
}

const Workspace: FC<Props> = ({ currentView }) => {
  const getStoredData = (key: string, defaultData: string): string => {
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem(key) || defaultData;
    } else {
      return defaultData;
    }
  }

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
    <div className="flex">
      <CodeArea
        textareaData={textareaData}
        setTextareaData={setTextareaData}
      />
      <div className="flex-1">
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

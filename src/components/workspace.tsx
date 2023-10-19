import { FC, useEffect, useState } from "react";
import BasicSetting from "@/components/basicSetting";
import HtmlDownload from "@/components/htmlDownload";
import TagLists from "@/components/tagList/tagLists";
import Viewer from "@/components/viewer";

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
      <div className="flex-1">
        <textarea
          className="block border border-black mx-auto p-3 resize-none rounded-lg text-xl w-11/12"
          rows={25}
          onChange={(e) => setTextareaData(e.target.value)}
          placeholder="HTMLを作成していきましょう。"
          value={textareaData}
        />
      </div>
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

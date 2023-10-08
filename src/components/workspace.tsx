import { useEffect, useState } from "react";
import BasicSetting from "@/components/basicSetting";
import HtmlDownload from "@/components/htmlDownload";
import TagLists from "@/components/tagLists";
import Viewer from "@/components/viewer";

type Props = {
  currentView: string
}

const getStoredData = (key: string, defaultData: string) => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key) || defaultData;
  } else {
    return defaultData;
  }
}

export default function Workspace({ currentView }: Props) {
  
  const [pageTitle, setPageTitle] = useState(getStoredData('pageTitle', ''));
  const [pageDescription, setPageDescription] = useState(getStoredData('pageDescription', ''));
  const [textareaData, setTextareaData] = useState('');

  useEffect(() => {
    sessionStorage.setItem('pageTitle', pageTitle);
  }, [pageTitle]);

  useEffect(() => {
    sessionStorage.setItem('pageDescription', pageDescription);
  }, [pageDescription]);

  return(
    <div className="flex">
      <div className="flex-1">
        <textarea
          className="block border border-black mx-auto p-3 resize-none rounded-lg text-xl w-11/12"
          rows={25}
          onChange={(e) => setTextareaData(e.target.value)}
          placeholder="HTMLを作成していきましょう。"
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

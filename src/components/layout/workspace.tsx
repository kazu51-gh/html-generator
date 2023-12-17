import { FC, useEffect, useState } from "react";
import { SessionUtility } from "@/utils/sessionUtility";
import BasicSetting from "@/components/layout/basicSetting";
import CodeArea from "@/components/layout/codeArea";
import HomeDescription from "@/components/layout/homeDescription";
import HTMLDescription from "@/components/layout/htmlDescription";
import HtmlDownload from "@/components/layout/htmlDownload";
import ElementList from "@/components/layout/elementList";
import Viewer from "@/components/layout/viewer";

type Props = {
  currentView: string;
}

const Workspace: FC<Props> = ({ currentView }) => {
  const [pageTitle, setPageTitle] = useState<string>(SessionUtility.getStoredData('pageTitle', ''));
  const [pageDescription, setPageDescription] = useState<string>(SessionUtility.getStoredData('pageDescription', ''));
  const [textareaData, setTextareaData] = useState<string>(SessionUtility.getStoredData('textareaData', ''));

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
        {currentView === 'home' && <HomeDescription />}
        {currentView !== 'home' &&
          <CodeArea
            textareaData={textareaData}
            setTextareaData={setTextareaData}
          />
        }
      </div>
      <div className="flex-1 m-3">
        {currentView === 'home' && <HTMLDescription />}
        {currentView === 'page-setting' &&
          <BasicSetting
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}
            pageDescription={pageDescription}
            setPageDescription={setPageDescription}
          />
        }
        {currentView === 'element-list' && <ElementList />}
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

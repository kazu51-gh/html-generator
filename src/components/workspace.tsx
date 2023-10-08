import { useState } from "react";
import BasicSetting from "@/components/basicSetting";
import HtmlDownload from "@/components/htmlDownload";
import TagLists from "@/components/tagLists";
import Viewer from "@/components/viewer";

type Props = {
  currentView: string
}

export default function Workspace({ currentView }: Props) {
  const [textareaData, setTextareaData] = useState('');

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
          <BasicSetting />
        }
        {currentView === 'tag-lists' &&
          <TagLists />
        }
        {currentView === 'viewer' &&
          <Viewer textareaData={textareaData} />
        }
        {currentView === 'html-download' &&
          <HtmlDownload textareaData={textareaData} />
        }
      </div>
    </div>
  );
}

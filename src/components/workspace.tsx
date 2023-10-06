import { useState } from "react";

export default function Workspace() {
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
      <div className="flex-1">工事中...</div>
    </div>
  );
}

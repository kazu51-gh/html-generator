import React from "react";

export default function Workspace() {
  return(
    <div className="flex">
      <div className="flex-1">
        <textarea className="border border-black m-3 w-11/12" />
      </div>
      <div className="flex-1">工事中...</div>
    </div>
  );
}

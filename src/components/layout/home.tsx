import { headingDescriptions } from "@/data/headingData";
import FunctionDescription from "@/components/headings/functionDescription";

const Home = () => {
  return(
    <div>
      <h2 className="text-4xl">ようこそ</h2>
      <p className="text-xl m-6">{headingDescriptions.home}</p>
      <h2 className="text-2xl mb-3">ページ構成</h2>
      <div className="ml-6">
        <FunctionDescription title="(共通) コードエリア" description={headingDescriptions.codeArea} />
        <FunctionDescription title="ページ情報設定" description={headingDescriptions.pageSetting} />
        <FunctionDescription title="タグ一覧" description={headingDescriptions.tagLists} />
        <FunctionDescription title="プレビュー" description={headingDescriptions.viewer} />
        <FunctionDescription title="ダウンロード" description={headingDescriptions.download} />
      </div>
    </div>
  );
}

export default Home;

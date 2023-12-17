import { functionDescriptions } from "@/data/descriptionData";
import FunctionDescription from "@/components/headings/functionDescription";

const HomeDescription = () => {
  return(
    <div>
      <h2 className="text-4xl">ようこそ</h2>
      <p className="text-2xl m-6">{functionDescriptions.home}</p>
      <FunctionDescription title="(共通) コードエリア" description={functionDescriptions.codeArea} />
      <FunctionDescription title="ページ情報設定" description={functionDescriptions.pageSetting} />
      <FunctionDescription title="HTML要素一覧" description={functionDescriptions.elementList} />
      <FunctionDescription title="プレビュー" description={functionDescriptions.viewer} />
      <FunctionDescription title="ダウンロード" description={functionDescriptions.download} />
    </div>
  );
}

export default HomeDescription;

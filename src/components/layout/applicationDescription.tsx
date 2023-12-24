import { functionDescriptions } from "@/data/descriptionData";
import FunctionTitle from "@/components/headings/functionTitle";

const ApplicationDescription = () => {
  return(
    <div>
      <h2 className="text-4xl">ようこそ</h2>
      <p className="text-2xl m-6">{functionDescriptions.home}</p>
      <FunctionTitle title="(共通) コードエリア" description={functionDescriptions.codeArea} />
      <FunctionTitle title="ページ情報設定" description={functionDescriptions.pageSetting} />
      <FunctionTitle title="HTML要素一覧" description={functionDescriptions.elementList} />
      <FunctionTitle title="プレビュー" description={functionDescriptions.viewer} />
      <FunctionTitle title="ダウンロード" description={functionDescriptions.download} />
    </div>
  );
}

export default ApplicationDescription;

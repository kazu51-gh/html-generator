import { FC } from "react";
import { SetClass } from "@/types/setClass";

const ClassInputWindow: FC<SetClass> = ({ setTagClass, setClassError }) => {
  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const pattern = /^[A-Za-z][A-Za-z0-9_\- ]*$/;
    if (value !== '' && !pattern.test(value)) {
      setClassError('先頭に数字を含まない半角英数字、ハイフン(-)、アンダースコア(_)を使用した文字列にしてください');
    } else if (value !== '' && /[ ]{2,}/.test(value)) {
      setClassError('連続したスペースを含めないようにしてください');
    } else {
      setClassError('');
    }
    setTagClass(value);
  }

  return(
    <input className="border border-black p-1 rounded text-lg w-1/2"
      onChange={(e) => handleClassChange(e)}
      type="text"
    />
  );
}

export default ClassInputWindow;

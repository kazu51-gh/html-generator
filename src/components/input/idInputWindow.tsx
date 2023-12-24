import { FC } from "react";
import { SetId } from "@/types/setId";

const IdInputWindow: FC<SetId> = ({ setTagId, setIdError }) => {
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const pattern = /^[A-Za-z][A-Za-z0-9_-]*$/;
    if (value !== '' && /\s/.test(value)) {
      setIdError('idにホワイトスペース(空白やタブなど)を含めることは出来ません');
    } else if (value !== '' && !pattern.test(value)) {
      setIdError('先頭に数字を含まない半角英数字、ハイフン(-)、アンダースコア(_)を使用した文字列にしてください');
    } else {
      setIdError('');
    }
    setTagId(value);
  }

  return(
    <input className="border border-black p-1 rounded text-lg w-1/2"
      onChange={(e) => handleIdChange(e)}
      type="text"
    />
  );
}

export default IdInputWindow;

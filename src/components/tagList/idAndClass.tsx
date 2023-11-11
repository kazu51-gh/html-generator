import { Dispatch, FC, SetStateAction, useState } from "react";

type Props = {
  setTagId: Dispatch<SetStateAction<string>>;
  setTagClass: Dispatch<SetStateAction<string>>;
}

const IdAndClass:FC<Props> = ({ setTagId, setTagClass }) => {
  const [idError, setIdError] = useState<string>('');
  const [classError, setClassError] = useState<string>('');

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

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const pattern = /^[A-Za-z][A-Za-z0-9_-]*$/;
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
    <div className="w-full">
      <div className="flex flex-row my-1">
        <label className="mr-1.5">id :</label>
        <input
          className="border border-black px-1 rounded w-1/2 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
          onChange={(e) => handleIdChange(e)}
          type="text"
        />
      </div>
      {idError !== '' &&
        <p className="text-xs text-red-500 my-1">{idError}</p>
      }
      <div className="flex flex-row my-1">
        <label className="mr-1.5">class :</label>
        <input
          className="border border-black px-1 rounded w-1/2 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
          onChange={(e) => handleClassChange(e)}
          type="text"
        />
      </div>
      {classError !== '' &&
        <p className="text-xs text-red-500 my-1">{classError}</p>
      }
    </div>
  );
}

export default IdAndClass;

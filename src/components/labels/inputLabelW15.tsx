import { FC } from "react";

type Props = {
  labelTitle: string;
}

const InputLabelW15:FC<Props> = ({ labelTitle }) => {
  return(<label className="block w-[15%] text-center">{labelTitle}</label>);
}

export default InputLabelW15;

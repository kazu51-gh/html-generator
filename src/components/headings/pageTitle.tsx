import { FC } from "react";

type Props = {
  title: string;
}

const PageTitle: FC<Props> = ({ title }) => {
  return(<h2 className="text-2xl mb-3">{title}</h2>);
}

export default PageTitle;

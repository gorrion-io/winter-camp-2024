import React from "react";

type Props = { title: string; content: string | number };

const InfoItem = ({ title, content }: Props) => {
  return (
    <div className="text-center">
      <p className="text-slate-400">{title}</p>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default InfoItem;

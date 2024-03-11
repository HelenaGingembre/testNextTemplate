import React, { FC } from "react";

interface ISectionTitleProps {
  mainTitle: string;
  subTitle?: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ mainTitle, subTitle }) => {
  return (
    <>
      <h2 className="center section-title uppercase text-xl font-semibold pb-10">
        {mainTitle}
      </h2>
      <h3 className={subTitle ? "visible" : "invisible"}>{subTitle}</h3>
    </>
  );
};

export default SectionTitle;

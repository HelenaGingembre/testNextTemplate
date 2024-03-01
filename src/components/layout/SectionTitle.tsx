import React, { FC } from "react";

interface ISectionTitleProps {
  mainTitle: string;
  subTitle?: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ mainTitle, subTitle }) => {
  return (
    <>
      <h2 className="center text-primary_dark uppercase text-xl font-semibold pb-10">
        {mainTitle}
      </h2>
      <h3>{subTitle}</h3>
    </>
  );
};

export default SectionTitle;

import React from "react";

const SectionTitle = ({ headingText }: { headingText: string }) => {
  return (
    <h1 className="text-xl md:text-3xl text-start font-bold text-white before:content-[''] before:w-[4px] before:h-[25px] md:before:h-[35px] before:bg-primary before:block before:rounded-full before:-mb-7 md:before:-mb-9 mb-5 2xl:mb-8">
      <span className="ml-2">{headingText}</span>
    </h1>
  );
};

export default SectionTitle;

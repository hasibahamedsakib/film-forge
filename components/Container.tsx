import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full sm:w-[540px] md:w-[750px] lg:w-[960px] xl:w-[1200px] 2xl:w-[1500px] 3xl:w-[1800px]  px-2 md:px-3 lg:px-4 xl:px-5 mx-auto min-h-screen">
      {children}
    </div>
  );
};

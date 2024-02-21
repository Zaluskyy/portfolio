"use client";
import React, { createContext, ReactNode, useState, useEffect } from "react";

const PortfolioContext = createContext<any>({} as any);

export const PortfolioContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [pageWidth, setPageWidth] = useState<null | Number>(null);

  return (
    <PortfolioContext.Provider
      value={{
        pageWidth,
        setPageWidth,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;

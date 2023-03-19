"use client";

import { ThemeContext, THEME_2022_DARK } from "@skbkontur/react-ui";
import { ReactNode } from "react";
import ReactUiCacheProvider from "./ReactUiCacheProvider";

type Props = {
  children: ReactNode;
};

export const ClientProviders = ({ children }: Props) => {
  return (
    <ReactUiCacheProvider>
      <ThemeContext.Provider value={THEME_2022_DARK}>
        {children}
      </ThemeContext.Provider>
    </ReactUiCacheProvider>
  );
};

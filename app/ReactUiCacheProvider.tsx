"use client";

import { CacheProvider } from "@emotion/react";
import { cache } from "@skbkontur/react-ui/lib/theming/Emotion";
import { useServerInsertedHTML } from "next/navigation";

export default function ReactUiCacheProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

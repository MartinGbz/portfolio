"use client";

import { useEffect, useState } from "react";
import { browserName } from "react-device-detect";

export function Background() {
  console.log(browserName);

  // fix hydratation error when loading the page
  // we wait for the client to be ready before rendering this component
  const [isClient, setIsClient] = useState(false);

  console.log(isClient);

  const browsersNotSupported = ["Safari", "Mobile Safari", "Edge"];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    // animate-fade-in to mask/hide the blob to appear before the page
    // (because th whole page is creating before the background is rendered because of hydratation issues)
    <div className="absolute w-screen h-screen top-0 left-0 -z-10 blur-2xl animate-fade-in">
      <div className="absolute w-screen h-screen  -top-1/4 -left-1/2">
        {browsersNotSupported.includes(browserName) ? (
          <object type="image/svg+xml" data="blobs/blob1.svg" />
        ) : (
          <object type="image/svg+xml" data="blobs/blob1-animated.svg" />
        )}
      </div>
      <div className="absolute w-screen h-screen top-1/2 -right-1/2">
        {browsersNotSupported.includes(browserName) ? (
          <object type="image/svg+xml" data="blobs/blob2.svg" />
        ) : (
          <object type="image/svg+xml" data="blobs/blob2-animated.svg" />
        )}
      </div>
    </div>
  ) : null;
}

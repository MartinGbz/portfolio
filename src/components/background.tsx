"use client";

import { useEffect, useState } from "react";
import { browserName } from "react-device-detect";

export function Background() {
  // fix hydratation error when loading the page
  // we wait for the client to be ready before rendering this component
  const [isClient, setIsClient] = useState(false);

  const browsersNotSupported = ["Safari", "Mobile Safari", "Edge"];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    // animate-fade-in to mask/hide the blob to appear before the page
    // (because th whole page is creating before the background is rendered because of hydratation issues)
    browsersNotSupported.includes(browserName) ? (
      <div className="absolute w-screen h-screen top-0 left-0 -z-10 blur-2xl animate-fade-in overflow-x-clip">
        <div className="absolute w-screen max-w-[2500px] h-screen -top-1/4 xl:-top-1/2 -left-1/2">
          <object type="image/svg+xml" data="blobs/blob1.svg" />
        </div>
      </div>
    ) : (
      <div className="absolute w-screen h-screen top-0 left-0 -z-10 blur-2xl animate-fade-in overflow-x-clip">
        <div className="absolute w-screen h-screen -top-1/4 -left-1/2">
          <object type="image/svg+xml" data="blobs/blob1-animated.svg" />
        </div>
        <div className="absolute w-screen max-w-[2500px] h-screen top-1/2 -right-1/2 -z-10">
          <object type="image/svg+xml" data="blobs/blob2-animated.svg" />
        </div>
      </div>
    )
  ) : null;
}

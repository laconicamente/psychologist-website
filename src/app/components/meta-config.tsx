"use client";

import { useEffect } from "react";

const MetaConfig = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;
    
        import("react-facebook-pixel").then((ReactPixel) => {
          ReactPixel.default.init("2173061336796663");
          ReactPixel.default.pageView();
        });
      }, []);

    return null;
};

export default MetaConfig;
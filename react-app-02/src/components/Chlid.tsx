import React, { useEffect } from "react";

export const Chlid = () => {
  useEffect(() => {
    console.log("Chlid render");
    return () => {
      console.log("Chlid render cleanup");
    };
  }, []);
  return <div>Im a child</div>;
};

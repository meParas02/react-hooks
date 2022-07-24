import React, { memo } from "react";

const ChildCom = ({ todo }) => {
  //   console.log("child child");
  return (
    <>
      <p>NO MORE RENDER</p>
    </>
  );
};

export default memo(ChildCom);

// 1. unessary child called without memo
// if you remove memo child called each time unessarly

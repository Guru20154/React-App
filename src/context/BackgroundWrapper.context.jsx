import React, { memo, useContext, useEffect, useState } from "react";
import { CounterContext } from "./count.context";

const BackgroundWrapper = ({ children }) => {
  const { counter } = useContext(CounterContext);
  const [bgColor, setBgColor] = useState(`rgba(0, 0, 0, 1)`);

  useEffect(() => {
    // Animate the background color with cubic-bezier curve transition
    setBgColor(`rgba(${Math.min(counter * 2, 255)}, ${Math.min(counter * 2, 255)}, ${Math.min(counter * 2, 255)}, 1)`);
  }, [counter]);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "94.7vh",
        padding: "20px",
        transition: "background-color 1s cubic-bezier(0.25, 0.8, 0.25, 1)", // Smooth transition
      }}
    >
      {children}
    </div>
  );
};

export default memo(BackgroundWrapper);

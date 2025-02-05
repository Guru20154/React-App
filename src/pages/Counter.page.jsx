import React, { useContext, useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
import { CounterContext } from "../context/count.context";

const Counter = () => {
  const {counter, setCounter} = useContext(CounterContext);


  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "48px",
          marginBottom: "20px",
          fontWeight: "bold",
          color: '#1976d2'
        }}
      >
        {counter}
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <img
          src="/plus.svg"
          alt="Increment"
          onClick={() => setCounter(counter + 1)}
          style={{
            width: "40px",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <span
          onClick={() => setCounter(0)}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            padding: "10px 20px",
            backgroundColor: '#1976d2',
            borderRadius: "8px",
            color: "#fff",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1976a2')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1976d5')}
        >
          Reset
        </span>
        <img
          src="/minus.svg"
          alt="Decrement"
          onClick={() => {
            if (counter > 0) setCounter(counter - 1);
          }}
          style={{
            width: "40px",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </div>
  );
};

export default Counter;

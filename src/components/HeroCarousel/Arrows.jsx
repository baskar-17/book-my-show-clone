import React from "react";

export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "#0000005e",
          borderRadius: "6px 0 0 6px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          ...props.style,
          backgroundColor: "#0000005e",
          borderRadius: "0 6px 6px 0",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          content: "&#8250;",
        }}
        onClick={props.onClick}
      />
    </>
  );
};

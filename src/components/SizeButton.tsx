import React from "react";

const SizeButton = (props: any) => (
  <button
    style={{
      width: "50px",
      height: "50px",
      margin: "5px",
      borderColor: props.active ? "black" : undefined,
    }}
    {...props}
  />
);

export { SizeButton };

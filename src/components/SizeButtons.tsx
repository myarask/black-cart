import React from "react";
import { SizeButton } from "./SizeButton";

const SizeButtons = (props: any) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span style={{ marginRight: "1rem" }}>SIZE:</span>
    {props.sizes.map((size: number) => (
      <SizeButton
        key={size}
        onClick={() => props.setSize(size)}
        active={props.size === size}
      >
        {size}
      </SizeButton>
    ))}
  </div>
);

export { SizeButtons };

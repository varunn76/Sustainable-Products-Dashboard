import * as React from "react";

const SvgIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "1em"}
    height={size || "1em"}
    fill={color || "currentColor"}
    stroke={color || "currentColor"}
    strokeWidth="0"
    viewBox="0 0 512 512"
  >
    <path
      stroke="none"
      d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416z"
    ></path>
  </svg>
);

export default SvgIcon;

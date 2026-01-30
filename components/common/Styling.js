"use client";
import React from "react";
import { TextShapeWhite } from "./svgIcons";

export const H2 = ({ text, className, span }) => {
  return (
    <h2 className={`text-[#1E1E1E]  text-[44px] font-[400] leading-[53px] font-bold capitalize ${className} `}
    >
      {text}
      {span}
    </h2>
  );
};
export const P = ({ text, className,}) => {
  return (
    <p className={`text-[#1E1E1E] font-segoe-ui text-[14px] font-[400] leading-[20px] tracking-[0.14px] ${className} `}
    >
      {text}
    </p>
  );
};

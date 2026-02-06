"use client";
import React from "react";

export const ButtonRound = ({
  text,
  className,
  span,
  arrow,
  onClick,
  link,
  type = "button",
}) => {
  // If link exists → render <a>
  if (link) {
    return (
      <a
        href={link}
        onClick={onClick}
        className={`button-round relative group py-[13.93px] px-[30px] rounded-[100px] font-segoe-ui transition-all ease-in font-[600] leading-[12.17px] ${className}`}
      >
        {span}
        {text}
        {arrow}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button-round relative group py-[13.93px] px-[30px] rounded-[100px] font-segoe-ui transition-all ease-in font-[600] leading-[12.17px] ${className}`}
    >
      {span}
      {text}
      {arrow}
    </button>
  );
};

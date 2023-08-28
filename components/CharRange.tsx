import React, { type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

// TODO: style range input

export default function CharRange({ ...props }: Props) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg capitalize">Character length</h3>
        <span className="text-teal-400 font-bold text-3xl">{props.value}</span>
      </div>
      <input
        {...props}
        type="range"
        className="w-full mt-5"
        step="1"
        min="6"
        max="20"
      />
    </>
  );
}

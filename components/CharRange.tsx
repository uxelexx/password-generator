import React, { useLayoutEffect, type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function CharRange({ ...props }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const input = inputRef.current;

    if (!input) return;

    const { min, max, value } = input;

    let percent = ((+value - +min) * 100) / (+max - +min);

    input.style.backgroundSize = `${percent}% 100%`;
  }, [props.value]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-lg capitalize font-semibold">Character length</h3>
        <span className="text-primary font-bold text-3xl">{props.value}</span>
      </div>
      <input
        {...props}
        type="range"
        ref={inputRef}
        className="w-full mt-5 h-2 cursor-pointer appearance-none"
        step="1"
        min="0"
        max="20"
      />
    </>
  );
}

import React, { type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  children: React.ReactNode;
};

export default function GeneratorCheckbox({ children, ...props }: Props) {
  return (
    <div className="flex space-x-5 items-center relative mb-5">
      <div className="grid place-items-center">
        <input
          id={props.name}
          className="peer cursor-pointer shrink-0 checked:bg-primary h-5 w-5 bg-transparent appearance-none border-2 border-neutral-100 hover:border-primary"
          {...props}
          type="checkbox"
        />
        <svg
          className="absolute text-bg-start top-[6px] left-[2px] pointer-events-none w-4 h-4 hidden peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <label htmlFor={props.name} className="text-lg capitalize cursor-pointer">
        {children}
      </label>
    </div>
  );
}

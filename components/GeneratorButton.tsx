import React, { type ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function GeneratorButton({ children, ...props }: Props) {
  return (
    <button
      className="uppercase hover:text-primary text-lg w-full p-5 flex items-center justify-center hover:border-primary border-2 font-semibold duration-150 ease-out"
      {...props}
      type="button"
    >
      {children}
      <span className="pl-5 text-sm">
        <Arrow />
      </span>
    </button>
  );
}

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      />
    </svg>
  );
}

"use client";

import { useRef } from "react";

type PasswordProps = {
  password: string;
};

export default function GenHeader({ password }: PasswordProps) {
  const ref = useRef<HTMLSpanElement>(null);
  let timer: ReturnType<typeof setTimeout> | null = null;

  function handleCopy() {
    navigator.clipboard.writeText(password);

    if (timer) return;

    ref.current?.classList.remove("hidden");
    ref.current?.classList.add("animate-fade-out-up");

    timer = setTimeout(() => {
      ref.current?.classList.add("hidden");
      timer = null;
    }, 1000);
  }

  return (
    <div className="text-neural-300 relative p-6 bg-zinc-700/80 w-full flex justify-between items-center">
      <span
        ref={ref}
        className="text-emerald-300 absolute right-0 -top-6 hidden duration-150 ease-out"
      >
        Copied!
      </span>
      <p className="font-semibold text-2xl focus:text-rose-500">{password}</p>
      <button
        type="button"
        className="cursor-pointer text-neutral-300 text-opacity-70 hover:text-opacity-100 active:scale-95"
        onClick={handleCopy}
      >
        <CopyIcon />
      </button>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
      />
    </svg>
  );
}

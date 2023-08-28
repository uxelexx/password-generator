import React, { type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  children: React.ReactNode;
};
export default function GeneratorCheckbox({ children, ...props }: Props) {
  return (
    <div className="flex space-x-5 items-center">
      <input id={props.name} {...props} type="checkbox" />
      <label htmlFor={props.name} className="capitalize">
        {children}
      </label>
    </div>
  );
}

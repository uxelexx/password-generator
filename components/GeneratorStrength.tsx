import React from "react";
import { calculateStrength } from "../helpers/calculateStrength";

type Props = {
  password: string;
};

export default function GeneratorStrength({ password }: Props) {
  const strength = calculateStrength(password);

  return (
    <div className="uppercase w-full flex justify-between items-center p-6 bg-slate-950/60">
      <p className="text-lg text-neutral-200 text-opacity-70">Strength</p>
      <span className={`text-${strength.color}-400 text-2xl font-semibold`}>
        {strength.value}
      </span>
    </div>
  );
}

import { calculateStrength } from "../helpers/calculateStrength";
import { StrengthColumn } from "./StrengthColumn";

type Props = {
  password: string;
};

export default function GeneratorStrength({ password }: Props) {
  const { value, color } = calculateStrength(password);

  return (
    <div className="uppercase w-full h-20 flex justify-between items-center p-6 bg-slate-950/60">
      <p className="text-lg text-neutral-100 text-opacity-70">Strength</p>
      <span className="text-2xl font-semibold flex items-center">
        {value} <StrengthColumn color={color} strength={value} />
      </span>
    </div>
  );
}

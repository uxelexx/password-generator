const columns: Record<string, boolean[]> = {
  "Too weak": [true, false, false, false],
  Weak: [true, true, false, false],
  Medium: [true, true, true, false],
  Strong: [true, true, true, true],
};

type Props = {
  color: string;
  strength: string;
};

export function StrengthColumn({ color, strength }: Props) {
  const column = columns[strength];

  return (
    <div className="flex space-x-[7px] h-7 ml-4">
      {column.map((column, index) => {
        const style = column
          ? { backgroundColor: color, borderColor: color }
          : undefined;
        return (
          <div
            key={index}
            style={style}
            className="w-[10px] border-2 border-neutral-200"
          ></div>
        );
      })}
    </div>
  );
}

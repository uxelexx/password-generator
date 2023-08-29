"use client";

import { getChars, getPassword } from "@/helpers/generatePassword.ts";
import { useState } from "react";
import CharRange from "./CharRange";
import GeneratorButton from "./GeneratorButton";
import GeneratorCheckbox from "./GeneratorCheckbox";
import GeneratorHead from "./GeneratorHead";
import GeneratorStrength from "./GeneratorStrength";

const checkBoxes = [
  {
    label: "Include uppercase letters",
    fieldname: "uppercase",
  },
  {
    label: "Include lowercase letters",
    fieldname: "lowercase",
  },
  {
    label: "Include numbers",
    fieldname: "numbers",
  },
  {
    label: "Include symbols",
    fieldname: "symbols",
  },
];

type CheckboxKeys = keyof typeof initialCheckboxes;

const initialCheckboxes = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
};

export default function GenBody() {
  const [charLen, setCharLen] = useState("0");
  const [pass, setPass] = useState("");
  const [checkbox, setCheckbox] = useState(initialCheckboxes);

  function generatePassword() {
    const chars = getChars(checkbox);
    const password = getPassword(+charLen, chars);
    setPass(password);
  }

  return (
    <>
      <GeneratorHead password={pass} />
      <div className="bg-zinc-700/80 w-full p-6 flex flex-col space-y-7">
        <CharRange value={charLen} onChange={e => setCharLen(e.target.value)} />
        <fieldset className="space-y-4">
          {checkBoxes.map(({ label, fieldname }) => (
            <GeneratorCheckbox
              key={fieldname}
              name={fieldname}
              checked={checkbox[fieldname as CheckboxKeys]}
              onChange={() =>
                setCheckbox({
                  ...checkbox,
                  [fieldname]: !checkbox[fieldname as CheckboxKeys],
                })
              }
            >
              {label}
            </GeneratorCheckbox>
          ))}
        </fieldset>
        <GeneratorStrength password={pass} />
        <GeneratorButton onClick={generatePassword}>Generate</GeneratorButton>
      </div>
    </>
  );
}

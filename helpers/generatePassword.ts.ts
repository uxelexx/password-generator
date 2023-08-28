type CharsParams = {
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
};

type Chars = (params: CharsParams) => string[];

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+";

function shuffle(arr: string) {
  const arrCopy = [...arr];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
  }

  return arrCopy.join("");
}

function getRandom(arr: string) {
  if (!arr) {
    return ' ';
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

// 1. Get necessary chars array
export const getChars: Chars = ({
  uppercase = true,
  lowercase = false,
  numbers = false,
  symbols = false,
}) => {
  let output = [];

  uppercase && output.push(UPPERCASE);
  lowercase && output.push(LOWERCASE);
  numbers && output.push(NUMBERS);
  symbols && output.push(SYMBOLS);

  return output;
};

// 2. Get random chars from chars array and shuffle
export function getPassword(passLen: number, chars: string[]) {
  let str = "";
  let arrIdx = 0;

  for (let i = 0; i < passLen; i++) {
    str += getRandom(chars[arrIdx]);
    arrIdx = (arrIdx + 1) % chars.length;
  }

  return shuffle(str);
}

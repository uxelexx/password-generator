type Strength = {
  contains: string[];
  length: number;
  value: string;
  color: string;
};

const defaultOptions = [
  {
    id: 0,
    value: " ",
    color: "",
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: "Too weak",
    color: "tomato",
    minDiversity: 1,
    minLength: 1,
  },
  {
    id: 2,
    value: "Weak",
    color: "darkorange",
    minDiversity: 2,
    minLength: 6,
  },
  {
    id: 3,
    value: "Medium",
    color: "khaki",
    minDiversity: 3,
    minLength: 8,
  },
  {
    id: 4,
    value: "Strong",
    color: "lightgreen",
    minDiversity: 4,
    minLength: 10,
  },
];

const defaultRules = [
  {
    regex: "[a-z]",
    message: "lowercase",
  },
  {
    regex: "[A-Z]",
    message: "uppercase",
  },
  {
    regex: "[0-9]",
    message: "number",
  },
  {
    regex: "[!@#$%^&*()_+]",
    message: "symbol",
  },
];

export function calculateStrength(
  password: string,
  options = defaultOptions,
  rules = defaultRules,
) {
  const passwordCopy = password || "";

  const strength = {} as Strength;

  strength.contains = rules
    .filter(rule => new RegExp(rule.regex).test(passwordCopy))
    .map(rule => rule.message);

  strength.length = passwordCopy.length;

  const fulfilledOptions = options
    .filter(option => strength.contains.length >= option.minDiversity)
    .filter(option => strength.length >= option.minLength)
    .sort((a, b) => b.id - a.id)
    .map(option => ({
      id: option.id,
      value: option.value,
      color: option.color,
    }));

  Object.assign(strength, fulfilledOptions[0]);

  return strength;
}

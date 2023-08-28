type Strength = {
  contains: string[];
  length: number;
  value: string;
  color: string;
};

const defaultOptions = [
  {
    id: 0,
    value: "Too weak",
    color: "red",
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: "Weak",
    color: "orange",
    minDiversity: 2,
    minLength: 6,
  },
  {
    id: 2,
    value: "Medium",
    color: "gold",
    minDiversity: 3,
    minLength: 8,
  },
  {
    id: 3,
    value: "Strong",
    color: "emerald",
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

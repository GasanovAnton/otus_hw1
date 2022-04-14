export type ScalarOperationType = (first: number, second: number) => number;
export type UnaryOperationType = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const square: UnaryOperationType = (
  num: number
): number => {
  return num * num
};


export const factorial: UnaryOperationType = (
  num: number
): number => num ? num * factorial(num - 1) : 1;
;



export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
};

export const mathUnaryOperators: { [key: string]: UnaryOperationType } = {
  "**": square,
  "!": factorial
};



export const mathPriorities: { [key: string]: number } = {
  UNARY: 0,
  FIRST: 1,
  SECOND: 2,
};

const { FIRST, SECOND, UNARY } = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "**": UNARY,
  "^": FIRST,
  "!": UNARY,
  "+": SECOND,
  "-": SECOND,
};

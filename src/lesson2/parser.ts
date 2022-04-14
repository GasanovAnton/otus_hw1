import { isNumber } from "./helpers";
import { mathOperators, mathUnaryOperators } from "./mathOperators";

export type ParsedLineType = Array<number | string>;

export const parser = (line: string): ParsedLineType | null => {
  const result = [];
  const stack = line.split(" ");

  for (let key = 0; key < stack.length; key++) {
    const prevItem = stack[key - 1];
    const item = stack[key];
    
    const isValidNumberPush = !isNumber(prevItem) && !mathUnaryOperators.hasOwnProperty(prevItem) && isNumber(item) ;
    const isValidOperatorPush =
      (isNumber(prevItem) && !isNumber(item) && (mathOperators.hasOwnProperty(item) || mathUnaryOperators.hasOwnProperty(item)))
      || 
      (mathUnaryOperators.hasOwnProperty(prevItem) && !isNumber(item) && mathOperators.hasOwnProperty(item))
      || 
      (mathUnaryOperators.hasOwnProperty(prevItem) && mathUnaryOperators.hasOwnProperty(item))

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
  }
  return result;
};

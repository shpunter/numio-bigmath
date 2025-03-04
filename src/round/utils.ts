import type { CalcLast, HandleCarryOver, HandleTail } from "./types.ts";
import {
  DOWN,
  HALF_DOWN,
  HALF_EVEN,
  HALF_ODD,
  HALF_UP,
  UP,
} from "./constants.ts";

export const handleTail: HandleTail = (array, isFloat) => {
  let lastIdx = array.length - 1;

  while (isFloat && array[lastIdx] <= 48) {
    if (array[lastIdx] === 46 || array.length === 1) isFloat = false;

    array.length > 1 && array.pop();
    lastIdx -= 1;
  }
};

export const handleCarryOver: HandleCarryOver = (array, isFloat) => {
  let hasCarryOver = true;
  let idx = array.length - 1;

  const mapFloat = new Map([
    [57, () => {
      array.pop();
      idx -= 1;
    }],
    [46, () => {
      array.pop();
      idx -= 1;
      isFloat = false;
    }],
    [0, () => {
      array[idx] += 1;
      hasCarryOver = false;
    }],
  ]);

  const mapInt = new Map([
    [57, () => {
      array[idx] = 48;
      idx -= 1;
    }],
    [0, () => {
      array[idx] += 1;
      hasCarryOver = false;
    }],
  ])

  while (hasCarryOver && idx >= 0) {
    const map = isFloat ? mapFloat : mapInt;
    const key = map.has(array[idx]) ? array[idx] : 0

    map.get(key)?.();
  }

  hasCarryOver && array.unshift(49);

  return [array, isFloat];
};

export const calcLast: CalcLast = (current, next, roundMode) => {
  const isEven = current % 2 === 1;

  const map = {
    [UP]: current + (next > 48 ? 1 : 0),
    [DOWN]: current,
    [HALF_UP]: current + (next >= 53 ? 1 : 0),
    [HALF_DOWN]: current + (next > 53 ? 1 : 0),
    [HALF_EVEN]: current + ((isEven && next >= 53) ? 1 : 0),
    [HALF_ODD]: current + ((!isEven && next >= 53) ? 1 : 0),
  };

  return map[roundMode] > 57 ? [48, true] : [map[roundMode], false];
};

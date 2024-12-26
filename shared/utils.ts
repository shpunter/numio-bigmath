export const createFinalString = (
  carryOver: number,
  array: number[],
  isFloat: boolean,
) => {
  let isToCheckTail = isFloat;

  for (let i = array.length - 1; i > 0; i--) {
    if (isToCheckTail && array[i] === 46) {
      array[i] = 32;
      isToCheckTail = false;
      break;
    }

    if (isToCheckTail && array[i] === 48) array[i] = 32;
    else break;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] === 46 || carryOver || array.length <= 1) break;
    
    if (array[i] === 48) array[i] = 32;
    else break;
  }

  return (carryOver ? String.fromCharCode(carryOver) : "") +
    String.fromCharCode(...array).trim();
};

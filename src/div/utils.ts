// deno-lint-ignore-file

const compare = (left: number[], right: number[]) => {
  if (left.length > right.length) return true;
  if (left.length < right.length) return false;

  for (let i = 0; i < left.length; i++) {
    if (left[i] < right[i]) return false;
  }

  return true;
};

export const division = (
  arrayL: number[],
  arrayR: number[],
  intLenL: number,
  intLenR: number,
) => {
  console.log(arrayL, arrayR);
  return [];
};

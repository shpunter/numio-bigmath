import { assertEquals } from "jsr:@std/assert";
import { getCandidates } from "../utils.ts";

Deno.test("0 has result", () => {
  const endsWithHasRes = [0] as const;
  const num1 = 0;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 11);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("0 no result", () => {
  const endsWith = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
  const num1 = 0;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

Deno.test("1 has result", () => {
  const endsWithHasRes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
  const num1 = 1;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 1);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("1 no result", () => {
  const endsWith = [] as const;
  const num1 = 1;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

Deno.test("2 has result", () => {
  const endsWithHasRes = [0, 2, 4, 6, 8] as const;
  const num1 = 2;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 2);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("2 no result", () => {
  const endsWith = [1, 3, 5, 7, 9] as const;
  const num1 = 2;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

Deno.test("3 has result", () => {
  const endsWithHasRes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
  const num1 = 3;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 1);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("3 no result", () => {
  const endsWith = [] as const;
  const num1 = 3;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

Deno.test("4 has result", () => {
  const endsWithHasRes = [0, 2, 4, 6, 8] as const;
  const num1 = 4;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 2);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("4 no result", () => {
  const endsWith = [1, 3, 5, 7, 9] as const;
  const num1 = 4;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

Deno.test("5 has result", () => {
  const endsWithHasRes = [0, 5] as const;
  const num1 = 5;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 5);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("5 no result", () => {
  const endsWith = [1, 2, 3, 4, 6, 7, 8, 9] as const;
  const num1 = 5;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

Deno.test("6 has result", () => {
  const endsWithHasRes = [0, 2, 4, 6, 8] as const;
  const num1 = 6;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 2);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("6 no result", () => {
  const endsWith = [1, 3, 5, 7, 9] as const;
  const num1 = 6;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

Deno.test("7 has result", () => {
  const endsWithHasRes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
  const num1 = 7;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 1);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("7 no result", () => {
  const endsWith = [] as const;
  const num1 = 7;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

Deno.test("8 has result", () => {
  const endsWithHasRes = [0, 2, 4, 6, 8] as const;
  const num1 = 8;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 2);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("8 no result", () => {
  const endsWith = [1, 3, 5, 7, 9] as const;
  const num1 = 8;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

Deno.test("9 has result", () => {
  const endsWithHasRes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
  const num1 = 9;

  for (let i = 0; i < endsWithHasRes.length; i++) {
    const array = getCandidates(num1, endsWithHasRes[i]) ?? [];

    assertEquals(array.length, 1);

    for (let j = 0; j < array.length; j++) {
      const [num2, startsWith] = array[j];
      assertEquals(startsWith * 10 + endsWithHasRes[i], num1 * num2);
    }
  }
});

Deno.test("9 no result", () => {
  const endsWith = [] as const;
  const num1 = 9;

  for (let i = 0; i < endsWith.length; i++) {
    const array = getCandidates(num1, endsWith[i]) ?? [];

    assertEquals(array.length, 0);
  }
});

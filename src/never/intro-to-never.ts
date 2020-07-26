/**
 * Never is used on functions that don't return values
 * Never is different than void because, when using void, th
 * function still returns something.
*/

function handleHttpErrors(error, code): never {
  throw { code, error }
}

// Source https://stackoverflow.com/questions/42291811/use-of-never-keyword-in-typescript
type SomeThing<T> = T extends null | undefined ? never : T;

const Y: SomeThing<number> = 5;

type First<T> = T extends [any, any] ? T[0] : never;
type Second<T> = T extends [any, any] ? T[1] : never;

const x = [122, 3, 4, 212, 4];

interface Z {
  
}
const y: First<> = x[0];
/**
 * Never is used on functions that don't return values
 * Never is different than void because, when using void, th
 * function still returns something.
*/

function handleHttpErrors(error, code): never {
  throw { code, error }
}
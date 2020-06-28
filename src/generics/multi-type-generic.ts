function arrayMergerANY(arr1: any, arr2: any): any[] {
  return [...arr1, ...arr2];
}

function arrayMergerGenerics<T, V>(arr1: T[], arr2: V[]): (T | V)[]{
  return [...arr1, ...arr2];
}

console.log(arrayMergerGenerics([1, 2, 3], ['hello', 'world']));
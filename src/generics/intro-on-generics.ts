/**
 * log: a wrapper of console.log
*/
function log<T>(arg: T): void {
  console.log(arg);
}

interface Person {
  name: string;
  age: number;
}

// Log a string
log<string>("Hello World");

// Log a number
log<number>(1);

// Log an object of type/interface Person
log<Person>({ name: "Firmino", age: 24 });

/**
 * CustomArray
*/
class CustomArray<T> {
  private arr: T[] = [];

  constructor(...args) {
    console.log(args);
    this.arr = args;
  }

  getItems(): T[] {
    return this.arr;
  }

  setItem(item: T): void {
    this.arr.push(item);
  }

  removeItem(item: T): void {
    this.arr = this.arr.filter((_item: T) => _item !== item);
  }
}

const myNameArr = new CustomArray('Firmino', 'Changani');

myNameArr.getItems();

myNameArr.removeItem('Changani');

console.log(myNameArr.getItems());
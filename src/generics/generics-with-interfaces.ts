/**
 * Generics with interfaces
*/

/**
 * Interface HTTPResponse
 * Since the interface doesn't know the data structure
 * of data property, a generator was added the developer
 * can define the type of data property when consuming this inteface
*/
interface HTTPResponse<T> {
  status: number;
  data: T | T[];
}

// Interface: Car
interface Car {
  id: string;
  name: string;
  engine: string;
  year: number;
}

function getCars(): Promise<HTTPResponse<Car>> {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        status: 200,
        data: [{
          id: "e3qwdase2e3ewewe23e3e32",
          name: "McLaren 720",
          engine: "v8",
          year: 2020
        }]
      });
    } catch (error) {
      reject(error);
    }
  });
}

console.log(getCars());
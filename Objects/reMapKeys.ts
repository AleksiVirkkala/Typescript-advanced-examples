// Muuntaa interfacen avaimet uppercaseen
type t1<T> = {
  [P in Uppercase<Extract<keyof T, string>>]: T[keyof T];
};

function keysToUpperCase<T>(obj: T): t1<T> {
  // ...
  return {} as t1<T>;
}

const upperCased = keysToUpperCase({ name: 'Aleksi', age: 21 });

upperCased.NAME;
upperCased.AGE;

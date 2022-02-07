// JavaScript and TypeScript support the const operator
// however, it behaves differently with values (strings, numbers) 
// and references (arrays, objects, functions)

const constant = "constant string";
const pi = 3.14;
const isTrue = true;

// these values will never change, and are never allowed to change

const array = [1, 2, 3, 4];

const object = {
    property1: "value",
};

// although they were initialized with const, you still can edit them

array.push(36);
array.unshift(50);

object.property1 = "new value";

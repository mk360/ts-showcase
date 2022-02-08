// JavaScript and TypeScript support the const operator
// however, it behaves differently with values (strings, numbers) 
// and references (arrays, objects, functions)

// these values will never change, and are never allowed to change

const constant = "constant string";
const pi = 3.14;
const isTrue = true;


// although they were initialized with const, you still can edit them

const array = [1, 2, 3, 4];

const object = {
    property1: "value",
};


array.push(36);
array.unshift(50);

object.property1 = "new value";

// Here are some pitfalls you should be aware of:

// 1. Because we're doing these templates inside a string,
// any value can be accepted as a string.

type DashThenNumber = `-${number}`;

type DashThenNumberAsAString = `-${string}`;

const str: DashThenNumber = '-46';
const str2: DashThenNumberAsAString = '-46';

// So you should be more specific when creating that sort of types.


// 2. Even though your string may follow a certain type template in terms of its value,
// TypeScript will decline it if it can be changed later.

let declined = '-46';

let errorOnTemplate: DashThenNumber = declined;

// The reason why it happens is because since "declined" can be changed into any string, that new string will
// probably not match the template we're trying to give to "errorOnTemplate".

// There are two ways to fix this:
// 1. Declare "declined" as a const.
// 2. Give "declined" a "DashThenNumber" type despite it being declared with "let"

// There is a way to mess it up:
// Declare "decline" with the value you want (even if it doesn't follow the template), then
// declare "errorOnTemplate" by giving it the value of "declined" then cast it as "DashThenNumber".
// TS will validate it, but your value will still be wrong.


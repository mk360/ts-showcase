// TS supports String Literal Templates

// The name indicates you can create templates for your strings to follow.

type NumberThenDashThenBoolean = `${number}-${boolean}`;

// here, whatever string we create with this type *has* to follow this template.
// a number, then a dash, then either true or false

const example: NumberThenDashThenBoolean = '36-false';

const invalidExample: NumberThenDashThenBoolean = `36-abcd`;

// thus the solution to our problem (proper typing to the font size inside a function)
// is to define a type that is a number followed by either
// px or rem

type FontSize = `${number}px` | `${number}rem`;

const sixteen: FontSize = '16px';

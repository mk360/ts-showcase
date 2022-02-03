let unknownVariable: unknown = {
    property: 'value',
};

// assigning the unknown variable to another one works, but this only moves the problem:
// the other variable has an unknown type as well.

const otherUnknownVariable = unknownVariable;

// assigning the unknown variable to an any-typed variable works.

let anyVariable: any = 36;

anyVariable = unknownVariable;

// assigning any value to an unknown variable works

unknownVariable = 36;

// unknownVariable still has an "unknown" type, despite clearly being given a number

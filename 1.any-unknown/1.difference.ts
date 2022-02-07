// unknown and any are similar:
// both can be used to specify that
// we don't know what's our variable's type.

// However, they have one key difference:
// the way with which we assign them to other variables


// here we forced objectAsUnknown to have an unknown type
// the following examples will raise an error: "Property 'property' does not exist on type 'unknown'."

const objectAsUnknown: unknown = {
    property: 'value',
};

const nonWorkingAssignment = objectAsUnknown.property;
objectAsUnknown.property = '';

// however, when we use any, the examples are now valid.

const objectAsAny: any = {
    property: 'value',
};

objectAsAny.property = 24;

const validAssignment = objectAsAny.property; // validAssignment will have an "any" type

// so in addition to the lack of knowledge about the variable, the "unknown" type is a way to protect against
// values that may or may not exist at runtime, thus preventing crashes.
// The only way to use it is to cast it into another type (using the "as" keyword).

const accessibleObject = objectAsUnknown as { property: string };

console.log(accessibleObject.property); // 'value'
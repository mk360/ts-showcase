// The "Readonly" types family
// provides readonly capability
// to a variable's type

interface NonReadonly {
    prop: string;
}

type ReadonlyProp = Readonly<NonReadonly>;

const r: ReadonlyProp = {
    prop: "",
};

// if that variable is an object,
// the properties will be on readonly.
// Since, because TS, you cannot
// add or remove properties on the fly,
// this essentially freezes the object.


const readonlyArray: ReadonlyArray<number> = [2, 4]

// ReadonlyArray is the Readonly equivalent for arrays
// This type needs the type of your array's content
// (here, 'number'), and also makes it
// read-only (just like in the previous
// "as const" example)

// There are also ReadonlyMap and ReadonlySet
// which freeze Map and Set objects
// respectively

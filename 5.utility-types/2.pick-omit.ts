interface CompleteInterface {
    prop1: string;
    prop2: number;
}

// The "Pick" utility type
// creates a new interface from
// specified parts
// of a main interface

type OnlyProp1 = Pick<CompleteInterface, 'prop1'>;

// here we "picked" prop1, so we're only supposed
// to provide it, without prop2

const prop1: OnlyProp1 = {
    prop1: '',
};

// "Omit" creates the interface
// by omitting
// the specified parts
// from the main interface

type OtherProp1 = Omit<CompleteInterface, 'prop2'>;

// here we omitted prop2, leaving us needing to
// provide prop1

const otherProp1: OtherProp1 = {
    prop1: '',
};

// in certain circumstances such as here,
// "Omit" and "Pick" will give the same
// result

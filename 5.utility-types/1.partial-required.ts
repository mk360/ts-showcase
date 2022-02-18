// TypeScript features some utility types
// for use cases deemed common

// The first one is "Partial",
// which makes all properties of an 
// object type / interface optional.

interface IRequired {
    prop: string;
}

const req: IRequired = {};

// error: you need to provide a 
// "prop" property since it's
// required

type IPartial = Partial<IRequired>;

const opt: IPartial = {};

// perfectly valid, plus, you 
// can define "prop" later

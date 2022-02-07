// the intersection definition crashes down
// when dealing with interfaces

interface A {
    prop1: string;
}

interface B {
    prop2: number;
}

type Merged = A & B; // possesses both prop1 and prop2

const mergedObj: Merged = {
    prop1: '',
    prop2: 36,
};

// same goes with types that represent objects

type FirstObj = { a: string };
type SecondObj = { b: boolean };

type MergedSecond = FirstObj & SecondObj;

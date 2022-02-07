// the intersection operator (&) is used to create
// an intersection

// An intersection represents the common properties of two types

type SetOne = string | number;
type SetTwo = string;

type Intersection = SetOne & SetTwo;

// here, SetOne and SetTwo have string in common, so the intersection
// is the string type

// whoever may be familiar with set theory will find the 
// intersection operator conforming to its rules

// an intersection of a subset and its set is equal to the subset
// numbers are part of the "number" type, thus they are subsets of "number"

type subset = 1 | 2 | 3 | 4 & number;

// the intersection of two disjointed sets is non-existent
// or in TS's case, "never"

type Never = string & number;

// more on the never type later
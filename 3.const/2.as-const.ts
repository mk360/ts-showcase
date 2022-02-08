// in order to match const's behavior with values,
// we can use a special "as const" type assertion.

const W = ["first value", "second value"] as const;

// "as const" forces the array / object to be readonly.
// the "readonly" applied to the array removes *every*
// method or way to edit the array (.push, pop, shift, etc.)

// since the array is now readonly, TypeScript can now
// recognize the individual array elements ("first value", 
// "second value") instead of a simple "string[]"

for (let element of W) {
    // TypeScript can now confirm "element"
    // is either "first value" or "second value",
    // applying more accurate logic on your code
}

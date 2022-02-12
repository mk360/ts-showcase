// A very common use case is to create a function that receives a
// string formatted in a specific format.

// For example, dynamically passing a font size to some text

function createTextWithSize(text: string, size: string) {
    return `<span style="font-size:${size}">${text}</span>"`;
};

// However, this is a naive approach that requires manually checking
// if the string follows the proper format (for example, a number that ends with "px" or "rem"),
// typically with a regex or with a .endsWith, .startsWith manipulation.

// You'll also need to prepare fallback values in case your check fails,
// in short, you'll be in a mess.

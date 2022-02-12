// A very common use case is to create a function that receives a
// string formatted in a specific format.

// For example, dynamically passing a font size to some text

function createTextWithSize(text: string, size: string) {
    return `<span style="font-size:${size}">${text}</span>"`;
};

// However, this is a naive approach that requires manually checking
// if the string follows the proper format (for example, a number that ends with "px")

//This file contains the code to the permutations function.


/**
 * return all unique permutations of the chars of the given string
 * @param {*} string the string to permut its chars
 * @returns an arry of all the permutatoins of the given string, only uniques. 
 */
function permutations(string) {
    return [];
}

// ----------------------------------------- "private" methods -----------------------------------------

/**
 * create a copy of a given array, but without a given elenet in the given index.
 * @param {*} array the array to create a copy of
 * @param {*} index the index to not include in the copy
 * @returns a copy of the arry, that does not have the element in the given index
 */
function copyAndRemoveElement(array, index) {
    return Array.isArray(array) ? array.filter(function(v, location) { return location !== index }) : array;
}

/**
 * Recieve an array of chars, and return all of it's posibale permitations
 * @param {*} array an array og chars to buikd akk the string permutation from
 * @returns all of the posible strings that cab be created by permutations of the chars in the given array 
 */
function buildPermutations(array) {
    return [];
}



// ----------------------------------------- export methods -----------------------------------------
export {permutations, copyAndRemoveElement, buildPermutations}
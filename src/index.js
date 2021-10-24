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
 */
function copyAndRemoveElement(array, index) {
    return Array.isArray(array) ? array.filter(function(v, location) { return location !== index }) : array;
}



// ----------------------------------------- export methods -----------------------------------------
export {permutations, copyAndRemoveElement}
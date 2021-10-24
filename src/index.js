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
 * get an array, and ruturn this array with only unique items [set]
 * @param {*} array the array that needs ri be uniqify
 * @returns the array onky with uniques element
 */
function uniquify(array) {
    return Array.isArray(array) ? Array.from(new Set(array), x => x) : array;
}

/**
 * Recieve an array of chars, and return all of it's posibale permitations
 * @param {*} array an array og chars to buikd akk the string permutation from
 * @returns all of the posible strings that cab be created by permutations of the chars in the given array 
 */
function buildPermutations(array) {
    const result = [];
  
    // Stopping condition
    if(array.length === 0) {
        return [''];
    }
  
    //For each item in the chars array, use it as the first char, than recursivly permut the remaining ones
    for (let loc = 0; loc < array.length; loc++){
        const currentChar = array[loc];
        const remainsPerms = buildPermutations(copyAndRemoveElement(array, loc)); // permut the rest of the array, but without the current item that is used as the first char
  
        // attached the current first char to each of the given permutations
        for (const permOfRest of remainsPerms){
            result.push(currentChar + permOfRest);
        }
    }
 
  return result;
}



// ----------------------------------------- export methods -----------------------------------------
export {permutations, copyAndRemoveElement, uniquify, buildPermutations}
//This file cintains the tests for the required functionality

import { permutations, copyAndRemoveElement } from '../src/index';

// test the permutations function
describe('permutations', function() {
    
    //This are the example tests for the code
    it('examples from description', function() {
        expect(permutations('a'))               .toStrictEqual(['a']);
        expect(permutations('ab').sort())       .toStrictEqual(['ab', 'ba'].sort());
        expect(permutations('aabb'))            .toStrictEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
    });
});

// ----------------------------------------- "private" methods tests -----------------------------------------

// test the copyAndRemoveElement function
describe('copyAndRemoveElement', function() {
    
    //Test special edgecasses
    it('test edge cases', function() {
      expect(copyAndRemoveElement(undefined, 0))    .toStrictEqual( undefined);
      expect(copyAndRemoveElement(null, 0))         .toStrictEqual( null);
      expect(copyAndRemoveElement([], 0))           .toStrictEqual( []);
      expect(copyAndRemoveElement([], 1))           .toStrictEqual( []);
      expect(copyAndRemoveElement([], -1))          .toStrictEqual( []);

      expect(copyAndRemoveElement(['a'], 15))       .toStrictEqual( ['a']);
      expect(copyAndRemoveElement(['a'], -7))       .toStrictEqual( ['a']);
    });

    // test a "normal" run of the function
    it('test "normal" cases', function() {
        expect(copyAndRemoveElement(['a'], 0))                      .toStrictEqual( []);
        expect(copyAndRemoveElement(['a', 'a'], 0))                 .toStrictEqual( ['a']);
        expect(copyAndRemoveElement(['a', 'b'], 0))                 .toStrictEqual( ['b']);
        expect(copyAndRemoveElement(['a', 'a'], 1))                 .toStrictEqual( ['a']);
        expect(copyAndRemoveElement(['a', 'b'], 1))                 .toStrictEqual( ['a']);

        expect(copyAndRemoveElement(['a', 'b','c', 'd', 'e'], 0))   .toStrictEqual( ['b', 'c', 'd', 'e']);
        expect(copyAndRemoveElement(['a', 'b','c', 'd', 'e'], 1))   .toStrictEqual( ['a', 'c', 'd', 'e']);
        expect(copyAndRemoveElement(['a', 'b','c', 'd', 'e'], 2))   .toStrictEqual( ['a', 'b', 'd', 'e']);
        expect(copyAndRemoveElement(['a', 'b','c', 'd', 'e'], 3))   .toStrictEqual( ['a', 'b', 'c', 'e']);
        expect(copyAndRemoveElement(['a', 'b','c', 'd', 'e'], 4))   .toStrictEqual( ['a', 'b', 'c', 'd']);

        expect(copyAndRemoveElement(['a', 'b','a', 'd', 'a'], 1))   .toStrictEqual( ['a', 'a', 'd', 'a']);
        expect(copyAndRemoveElement(['a', 'b','a', 'd', 'a'], 0))   .toStrictEqual( ['b', 'a', 'd', 'a']);
        expect(copyAndRemoveElement(['a', 'a','a', 'd', 'a'], 3))   .toStrictEqual( ['a', 'a', 'a', 'a']);
    });
});
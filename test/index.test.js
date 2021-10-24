const index = require('../src/index');

// test the permutations functions
describe('permutations', function() {
    
    //This are the example tests for the code
    it('examples from description', function() {
      Test.assertSimilar(permutations('a'), ['a']);
      Test.assertSimilar(permutations('ab').sort(), ['ab', 'ba'].sort());
      Test.assertSimilar(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
    });
  });

// ----------------------------------------- "private" methods tests -----------------------------------------
/**
 * Test suite for Souvlaki vs Kalamaki game
 */

const { canSouvlakiWin } = require('./souvlaki-game');

/**
 * Simple test runner
 */
function test(description, callback) {
    try {
        callback();
        console.log(`✓ ${description}`);
    } catch (error) {
        console.error(`✗ ${description}`);
        console.error(`  ${error.message}`);
    }
}

function assertEquals(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(message || `Expected ${expected} but got ${actual}`);
    }
}

// Run all tests
console.log('Testing Souvlaki vs Kalamaki Game\n');

// Tests for even n (Souvlaki has last move)
test('n=4 (even) - random array should return YES', () => {
    assertEquals(canSouvlakiWin([1, 2, 3, 4]), 'YES');
});

test('n=4 (even) - reversed array should return YES', () => {
    assertEquals(canSouvlakiWin([4, 3, 2, 1]), 'YES');
});

test('n=6 (even) - any array should return YES', () => {
    assertEquals(canSouvlakiWin([5, 4, 3, 2, 1, 0]), 'YES');
});

test('n=2 (even) - minimal even case should return YES', () => {
    assertEquals(canSouvlakiWin([2, 1]), 'YES');
});

// Tests for odd n with sufficient frequency
test('n=5 (odd), max_freq=3 (≥ceil(5/2)=3) should return YES', () => {
    assertEquals(canSouvlakiWin([1, 1, 1, 2, 3]), 'YES');
});

test('n=7 (odd), max_freq=4 (≥ceil(7/2)=4) should return YES', () => {
    assertEquals(canSouvlakiWin([2, 2, 2, 2, 1, 3, 4]), 'YES');
});

test('n=9 (odd), max_freq=5 (≥ceil(9/2)=5) should return YES', () => {
    assertEquals(canSouvlakiWin([1, 1, 1, 1, 1, 2, 3, 4, 5]), 'YES');
});

test('n=3 (odd), max_freq=2 (≥ceil(3/2)=2) should return YES', () => {
    assertEquals(canSouvlakiWin([1, 1, 2]), 'YES');
});

// Tests for odd n without sufficient frequency
test('n=3 (odd), max_freq=1 (<ceil(3/2)=2) should return NO', () => {
    assertEquals(canSouvlakiWin([1, 2, 3]), 'NO');
});

test('n=5 (odd), max_freq=2 (<ceil(5/2)=3) should return NO', () => {
    assertEquals(canSouvlakiWin([1, 1, 2, 3, 4]), 'NO');
});

test('n=7 (odd), max_freq=3 (<ceil(7/2)=4) should return NO', () => {
    assertEquals(canSouvlakiWin([1, 1, 1, 2, 3, 4, 5]), 'NO');
});

test('n=9 (odd), max_freq=4 (<ceil(9/2)=5) should return NO', () => {
    assertEquals(canSouvlakiWin([1, 1, 1, 1, 2, 3, 4, 5, 6]), 'NO');
});

// Edge cases
test('n=1 (odd), single element - max_freq=1 (≥ceil(1/2)=1) should return YES', () => {
    assertEquals(canSouvlakiWin([5]), 'YES');
});

test('All same elements (even n) should return YES', () => {
    assertEquals(canSouvlakiWin([3, 3, 3, 3]), 'YES');
});

test('All same elements (odd n) should return YES', () => {
    assertEquals(canSouvlakiWin([7, 7, 7, 7, 7]), 'YES');
});

test('Large numbers work correctly', () => {
    assertEquals(canSouvlakiWin([1000000, 999999, 1000000, 999999]), 'YES');
});

test('Negative numbers work correctly', () => {
    assertEquals(canSouvlakiWin([-1, -2, -3, -4]), 'YES');
});

console.log('\nAll tests completed!');

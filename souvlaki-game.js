/**
 * Souvlaki vs Kalamaki Array Sorting Game
 * 
 * Two players, Souvlaki and Kalamaki, are given a sequence of n integers.
 * They play n-1 rounds alternately:
 * - Souvlaki plays on odd rounds (1, 3, 5, ...)
 * - Kalamaki plays on even rounds (2, 4, 6, ...)
 * 
 * Each round a player can either skip or swap adjacent elements.
 * Souvlaki wins if the array is sorted after all rounds.
 * Before the game, Souvlaki can reorder the array however he wants.
 * 
 * Question: Can Souvlaki guarantee a win regardless of Kalamaki's moves?
 * 
 * Solution:
 * 1. If n is even → Souvlaki has the last move (round n-1 is odd) → YES
 * 2. If n is odd → Kalamaki has the last move (round n-1 is even)
 *    In this case, Souvlaki can win if there exists an element that appears
 *    at least ceil(n/2) times, because he can arrange the array such that
 *    it has many equal consecutive elements that Kalamaki cannot break.
 */

/**
 * Determines if Souvlaki can guarantee a win
 * @param {number[]} arr - The array of integers
 * @returns {string} - "YES" if Souvlaki can guarantee a win, "NO" otherwise
 */
function canSouvlakiWin(arr) {
    const n = arr.length;
    
    // If n is even, Souvlaki has the last move and can always win
    if (n % 2 === 0) {
        return "YES";
    }
    
    // If n is odd, check if max frequency >= ceil(n/2)
    const frequencyMap = {};
    let maxFrequency = 0;
    
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
    }
    
    const requiredFrequency = Math.ceil(n / 2);
    
    if (maxFrequency >= requiredFrequency) {
        return "YES";
    }
    
    return "NO";
}

// Test cases
function runTests() {
    console.log("Running test cases...\n");
    
    // Test case 1: n=4 (even) → YES
    const test1 = [1, 2, 3, 4];
    console.log(`Test 1: arr = [${test1}]`);
    console.log(`n = ${test1.length} (even)`);
    console.log(`Result: ${canSouvlakiWin(test1)}`);
    console.log(`Expected: YES\n`);
    
    // Test case 2: n=4 (even) → YES
    const test2 = [4, 3, 2, 1];
    console.log(`Test 2: arr = [${test2}]`);
    console.log(`n = ${test2.length} (even)`);
    console.log(`Result: ${canSouvlakiWin(test2)}`);
    console.log(`Expected: YES\n`);
    
    // Test case 3: n=5 (odd), max_freq=3, ceil(5/2)=3 → YES
    const test3 = [1, 1, 1, 2, 3];
    console.log(`Test 3: arr = [${test3}]`);
    console.log(`n = ${test3.length} (odd), max_freq = 3, ceil(5/2) = 3`);
    console.log(`Result: ${canSouvlakiWin(test3)}`);
    console.log(`Expected: YES\n`);
    
    // Test case 4: n=3 (odd), max_freq=1, ceil(3/2)=2 → NO
    const test4 = [1, 2, 3];
    console.log(`Test 4: arr = [${test4}]`);
    console.log(`n = ${test4.length} (odd), max_freq = 1, ceil(3/2) = 2`);
    console.log(`Result: ${canSouvlakiWin(test4)}`);
    console.log(`Expected: NO\n`);
    
    // Test case 5: n=5 (odd), max_freq=2, ceil(5/2)=3 → NO
    const test5 = [1, 1, 2, 3, 4];
    console.log(`Test 5: arr = [${test5}]`);
    console.log(`n = ${test5.length} (odd), max_freq = 2, ceil(5/2) = 3`);
    console.log(`Result: ${canSouvlakiWin(test5)}`);
    console.log(`Expected: NO\n`);
    
    // Additional test case: n=6 (even) → YES
    const test6 = [5, 4, 3, 2, 1, 0];
    console.log(`Test 6: arr = [${test6}]`);
    console.log(`n = ${test6.length} (even)`);
    console.log(`Result: ${canSouvlakiWin(test6)}`);
    console.log(`Expected: YES\n`);
    
    // Additional test case: n=7 (odd), max_freq=4, ceil(7/2)=4 → YES
    const test7 = [2, 2, 2, 2, 1, 3, 4];
    console.log(`Test 7: arr = [${test7}]`);
    console.log(`n = ${test7.length} (odd), max_freq = 4, ceil(7/2) = 4`);
    console.log(`Result: ${canSouvlakiWin(test7)}`);
    console.log(`Expected: YES\n`);
}

// Export for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { canSouvlakiWin, runTests };
}

// Run tests if this file is executed directly
if (require.main === module) {
    runTests();
}

# Souvlaki vs Kalamaki Array Sorting Game

## Problem Description

Two players, **Souvlaki** and **Kalamaki**, are given a sequence of `n` integers. They play `n-1` rounds alternately:
- **Souvlaki** plays on odd rounds (1, 3, 5, ...)
- **Kalamaki** plays on even rounds (2, 4, 6, ...)

Each round, a player can either:
- **Skip** (do nothing)
- **Swap** two adjacent elements `a[i]` and `a[i+1]`

**Winning Condition**: Souvlaki wins if the array is sorted (in non-decreasing order) after all `n-1` rounds.

**Initial Setup**: Before the game starts, Souvlaki can reorder the array however he wants.

**Question**: Can Souvlaki reorder the array to guarantee a win regardless of Kalamaki's moves?

## Solution Strategy

### Key Insights

1. **Last Move Advantage**: The player who makes the last move has a significant advantage
   - For `n` elements, there are `n-1` rounds
   - If `n` is **even**: Round `n-1` is odd → Souvlaki has the last move
   - If `n` is **odd**: Round `n-1` is even → Kalamaki has the last move

2. **When n is even** (Souvlaki has the last move):
   - Souvlaki can always guarantee a win
   - He can arrange the array to be sorted, and on his last move, he can fix any disruption Kalamaki made
   - **Result**: YES

3. **When n is odd** (Kalamaki has the last move):
   - Souvlaki needs a special arrangement to guarantee a win
   - If there exists an element that appears at least `⌈n/2⌉` times (majority element)
   - Souvlaki can arrange the array such that it has many equal consecutive elements
   - Even if Kalamaki tries to disrupt, the array can still end up sorted due to the high frequency of equal elements
   - **Result**: YES if `max_frequency ≥ ⌈n/2⌉`, otherwise NO

### Algorithm

```javascript
function canSouvlakiWin(arr) {
    const n = arr.length;
    
    // If n is even, Souvlaki has the last move
    if (n % 2 === 0) {
        return "YES";
    }
    
    // If n is odd, check max frequency
    const frequencyMap = {};
    let maxFrequency = 0;
    
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
    }
    
    return maxFrequency >= Math.ceil(n / 2) ? "YES" : "NO";
}
```

### Complexity
- **Time Complexity**: O(n) - single pass through the array
- **Space Complexity**: O(n) - for the frequency map (worst case: all unique elements)

## Test Cases

### Case 1: n=4 (even)
- **Input**: `[1, 2, 3, 4]`
- **Expected**: `YES`
- **Reason**: n is even, Souvlaki has the last move

### Case 2: n=4 (even)
- **Input**: `[4, 3, 2, 1]`
- **Expected**: `YES`
- **Reason**: n is even, Souvlaki has the last move

### Case 3: n=5 (odd), sufficient frequency
- **Input**: `[1, 1, 1, 2, 3]`
- **Expected**: `YES`
- **Reason**: max_freq=3 ≥ ceil(5/2)=3

### Case 4: n=3 (odd), insufficient frequency
- **Input**: `[1, 2, 3]`
- **Expected**: `NO`
- **Reason**: max_freq=1 < ceil(3/2)=2

### Case 5: n=5 (odd), insufficient frequency
- **Input**: `[1, 1, 2, 3, 4]`
- **Expected**: `NO`
- **Reason**: max_freq=2 < ceil(5/2)=3

## Running the Code

### Run with test output:
```bash
node souvlaki-game.js
```

### Run the test suite:
```bash
node souvlaki-game.test.js
```

### Use as a module:
```javascript
const { canSouvlakiWin } = require('./souvlaki-game');

const result = canSouvlakiWin([1, 1, 1, 2, 3]);
console.log(result); // "YES"
```

## Mathematical Proof (Intuition)

### Why ceil(n/2) is the threshold for odd n?

When `n` is odd and Kalamaki has the last move:
- If an element appears at least `⌈n/2⌉` times, it means this element is a "majority"
- Souvlaki can arrange the array such that these majority elements are placed strategically
- Even with Kalamaki's disruptions, the sorted state can be maintained or easily restored
- The majority element creates "stable zones" that are hard to break

Example: `n=5`, array `[2, 2, 2, 1, 3]`
- Souvlaki can arrange it as `[1, 2, 2, 2, 3]` (already sorted)
- No matter what Kalamaki does on the last move, swapping adjacent elements won't prevent the array from being sortable
- If arranged correctly with majority elements in the middle, the array remains sorted

## Files

- `souvlaki-game.js` - Main implementation with inline tests
- `souvlaki-game.test.js` - Comprehensive test suite
- `SOUVLAKI_GAME_README.md` - This documentation file

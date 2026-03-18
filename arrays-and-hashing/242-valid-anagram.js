/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // If they have different length, then obviously they are not anagram
    if (s.length !== t.length) {
        return false
    }

    // Use memo to count the frequency of characters
    const memo = {}

    for (let idx = 0; idx < s.length; idx++) {
        const charS = s[idx]
        const charT = t[idx]

        memo[charS] = (memo[charS] || 0) + 1 // If exist in s, then increment
        memo[charT] = (memo[charT] || 0) - 1 // If exist in t, then decrement
    }

    return Object.values(memo).every(item => item === 0) // In the end, if all values are 0, then they are anagram
};

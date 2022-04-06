/**
 * @param {string} s
 * @return {number}
 Given a string s, find the length of the longest substring without repeating characters.
 */
const lengthOfLongestSubstring = (s) => {
    let startIndex = 0;
    let ans = 0;
    let hash = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        // if there is repeating char then update the start index
        if (char in hash) {
            startIndex = Math.max(startIndex, hash[char] + 1);
        }
        ans = Math.max(ans, i-startIndex+1);
        hash[char] = i;
    }
    return ans;
};

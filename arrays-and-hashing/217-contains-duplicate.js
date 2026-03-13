function containsDuplicate(nums) {

}

export default containsDuplicate;
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Use set instead of object because some sources mentioned that it's faster
    // https://github.com/anvaka/set-vs-object
    const memo = new Set()

    for (const num of nums) {
        // If the number is already exist, return true
        if (memo.has(num)) {
            return true
        }

        // If the number is not exist, add it to the set
        memo.add(num)
    }

    // After finished the loop, it must be not contain duplicate
    return false
};

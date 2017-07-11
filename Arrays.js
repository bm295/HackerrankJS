/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let max;
    max = nums.sort(function(a,b) {
        return b - a;
    })[0];
    let result;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != max) {
            result = nums[i];
            break;
        }
    }
    return result;
}

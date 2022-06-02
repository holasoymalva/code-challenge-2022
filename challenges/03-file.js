let nums = [1,2,3,1];
// let nums = [1,2,3,4];

const containsDuplicate = function(nums) {
    nums.sort();
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] == nums[index+1]) {
            return true;
        }
    }
    return false;
};

console.log("result : ",containsDuplicate(nums));
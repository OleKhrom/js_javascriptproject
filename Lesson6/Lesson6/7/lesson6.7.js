
function sortNums(arrayofNums, direction) {
    if (direction === 'ascending') return arrayofNums.sort((a, b) => a - b);
    if (direction === 'descending') return arrayofNums.sort((a, b) => b - a);
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
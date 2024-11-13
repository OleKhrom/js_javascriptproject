let swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

let array = [11, 22, 33, 44];
swap(array, 0, 1);
console.log(array);
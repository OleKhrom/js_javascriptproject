Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);
    }
};
[1, 3, 5].myForEach((x) => console.log(x));


Array.prototype.myFilter = function (callback) {
    const arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }
    return arr;
};

let users = [
    {id: 2, name: 'John', status: true},
    {id: 3, name: 'Kai',  status: true},
    {id: 4, name: 'Sam', status: true},
    {id: 5, name: 'Wendi', status: false},

];
const result = users.myFilter((user) => user.status);
console.log(result);


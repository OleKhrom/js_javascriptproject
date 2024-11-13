let createSomething = (arr) => {
    return arr.map(item => `<li>${item}</li>`).join('\n');
};
let arr = [`hello`, 6, `world`, true, 9, false, 3];
let something = createSomething(arr);
console.log(`<ul>${something}</ul>`);

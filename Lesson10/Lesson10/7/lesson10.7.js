function addToLocalStorage(arrayName, objToAdd) {
    const IsItem = localStorage.getItem(arrayName);
    if (IsItem) {
        throw new Error('no');
    }
    const array = JSON.parse(IsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
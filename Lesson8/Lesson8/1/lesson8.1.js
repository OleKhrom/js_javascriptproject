function cloner(object) {
    if (object) {
        let functions = [];
        for (const key in object) {
            if (typeof object[key] === 'function') {
                const functionClone = object[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObject = JSON.parse(JSON.stringify(object));
        for (const { functionClone, key } of functions) {
            cloneObject[key] = functionClone;
        }
        console.log(cloneObject);
        return cloneObject;
    }
    throw new Error(`???????`)
}
cloner({id: 3435, name: 'Helga', read() {}, write() {}});
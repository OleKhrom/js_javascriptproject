let createSomething = (text) => {
    let ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};
createSomething(`Soon will be December`);

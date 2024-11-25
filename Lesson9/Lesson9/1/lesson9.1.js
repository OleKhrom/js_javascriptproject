let div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

div.textContent = 'lorem ipsum'

let cloneNode = div.cloneNode(true);
document.body.append(div, cloneNode);

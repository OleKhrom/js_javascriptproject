const tableGeneratorFrom = document.forms['tableGeneratorFrom'];
tableGeneratorFrom.onsubmit = function (e) {
    e.preventDefault();
    const linesValue = +tableGeneratorFrom.lines.value;
    const cellsValue = +tableGeneratorFrom.cells.value;
    const dateValue = tableGeneratorFrom.date.value;
    console.log(linesValue, cellsValue, dateValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dateValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
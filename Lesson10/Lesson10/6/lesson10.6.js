const input = document.getElementById("abc");
const resultDiv = document.getElementById("result");
input.oninput = function () {
    const kilograms =+this.value;
    resultDiv.textContent = kilograms * 2.2;
};
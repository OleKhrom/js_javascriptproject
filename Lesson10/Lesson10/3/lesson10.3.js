const abc = document.forms.abc;
const target = document.getElementById('target');
abc.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = abc.name.value;
    const surnameValue = abc.surname.value;
    const ageValue = abc.age.value;
    let object = {nameValue, surnameValue, ageValue};
    console.log(object);
    target.innerText = object.nameValue + '' + object.surnameValue + '' + object.ageValue + '' + object.ageValue;
})
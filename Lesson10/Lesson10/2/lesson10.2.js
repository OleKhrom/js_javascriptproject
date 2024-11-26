function checkAge() {
    let age = document.getElementById("ageInput").value;
    let message = age < 18 ? "You are younger than 18" : "You are 18 or older";
    document.getElementById("message").textContent = message;
}